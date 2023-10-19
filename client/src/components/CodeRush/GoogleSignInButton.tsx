import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../contexts/UserContext";
import { toast } from "react-toastify";
import { FirebaseError } from "firebase/app";

export default function GoogleSignInButton() {
  const { signInWithGoogle } = useAuth();
  
  const signIn = () => {
    try {
      signInWithGoogle();
    } catch (error) {
      const err = error as FirebaseError;
      console.log(error);
      toast.error(err.message);
    }
  }
  return (
    <>
    <button onClick={signIn} className="flex items-center justify-center gap-2 bg-white rounded-md text-black text-sm px-8 py-2 shadow">
        <span>Sign in with Google</span>
        <FcGoogle size={28}/>
    </button>
    </>
  )
}
