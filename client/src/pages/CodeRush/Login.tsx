import { Link, Navigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import InputWithIcon from "../../components/InputWithIcon";
import GoogleSignInButton from "../../components/CodeRush/GoogleSignInButton";
import RegisterGuard from "../../components/CodeRush/RegisterGuard";
import { FormEvent, useState } from "react";
import { useAuth } from "../../contexts/UserContext";
import { FirebaseError } from "firebase/app";
import { getMsgFromFirebaseErrorCode } from "../../libs/firebaseError";


export default function Login() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();

    async function onLogin(e:FormEvent) {
        e.preventDefault();
        setError("")
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        try {
            setLoading(true);
            await signIn(data.email as string, data.password as string);
            Navigate({ to: "/coderush" });
        } catch (err) {
            const _err = err as FirebaseError;
            console.log(_err.code);
            setError(getMsgFromFirebaseErrorCode(_err));
        } finally {
            setLoading(false);
        }
    }

    return (
    <RegisterGuard>
        <div className="grid justify-stretch items-center my-16 py-8 px-4 w-full max-w-lg mx-auto rounded-md bg-primary-2">
            <GoogleSignInButton/>
            <p className="text-center py-12 font-medium">OR</p>
            <div>
                <form onSubmit={onLogin}>
                    <InputWithIcon icon={<MdOutlineAlternateEmail/>} type="email" name="email" placeholder="Email" required/>
                    <InputWithIcon icon={<FaLock/>} type="password" name="password" placeholder="Password" required/>
                    <p className="py-4 text-red-500">{error}</p>
                    <div className="py-4">
                        <button type="submit" className="w-full py-2 px-4 bg-blue-600 font-medium rounded-md">{loading ? "Please Wait" : "Login"}</button>
                    </div>
                </form>
                <div className="py-12">
                    <p>Don't have an account? <Link className="text-red-500 underline" to={"/coderush/register"}>Register</Link></p>
                </div>
            </div>
        </div>
    </RegisterGuard>
    )
}
