import { FcGoogle } from "react-icons/fc";

export default function GoogleSignInButton() {
  return (
    <>
    <button className="flex items-center justify-center gap-2 bg-white rounded-md text-black text-sm px-8 py-2 shadow">
        <span>Sign in with Google</span>
        <FcGoogle size={28}/>
    </button>
    </>
  )
}
