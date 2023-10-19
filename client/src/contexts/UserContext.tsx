import {
  GoogleAuthProvider,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  getRedirectResult,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
  updateProfile,
} from "firebase/auth";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { auth } from "../libs/firebase";

type AuthContextProps = {
  user: User | null;
  loading: 'not-loading' | 'loading' | 'loaded';
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signInWithGoogle: () => void;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => void;
  sendEmailVerificationLink: () => Promise<void | null>;
  resetPassword: (email: string) => Promise<void>;
};

const AuthContext = createContext({} as AuthContextProps);

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider(props: PropsWithChildren) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<'not-loading' | 'loading' | 'loaded'>('not-loading');

  useEffect(() => {
    setLoading('loading');
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading('loaded');
      console.log(user);
      // user?.getIdToken().then(res => console.log(res))
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    getRedirectResult(auth)
      .then(result => {
        if(result?.user) setUser(result?.user)
      })
  }, []);

  const signUp = async (name: string, email: string, password: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
    // profile update
    if (auth.currentUser)
      await updateProfile(auth.currentUser, {
        displayName: name,
      });
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser({ ...currentUser }); // user is an object so destructure is must to make it immutable.
    }
  };
  async function signIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider();
    signInWithRedirect(auth, googleProvider);
  }
  // logout the current logged in user and set state of user to be null
  async function logOut() {
    return signOut(auth);
  }
  async function sendEmailVerificationLink() {
    if (!auth.currentUser) return null;
    return await sendEmailVerification(auth.currentUser);
  }
  async function resetPassword(email: string) {
    return await sendPasswordResetEmail(auth, email);
  }
  return (
    <>
      <AuthContext.Provider value={{
        user,
        loading,
        signUp,
        signInWithGoogle,
        signIn,
        logOut,
        sendEmailVerificationLink, 
        resetPassword
        }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
