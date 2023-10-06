import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";
import { auth } from "../libs/firebase";

type AuthContextProps = {
  user: User | null;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => void;
  loading: 'not-loading' | 'loading' | 'loaded';
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
        console.log(user)
    });
    return unsubscribe;
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
  // logout the current logged in user and set state of user to be null
  async function logOut() {
    return signOut(auth);
  }
  return (
    <>
      <AuthContext.Provider value={{ user, signUp, signIn, logOut, loading }}>
        {props.children}
      </AuthContext.Provider>
    </>
  );
}
