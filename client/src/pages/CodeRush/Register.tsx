import { Link, Navigate } from "react-router-dom";
import { FaLock, FaUserAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import InputWithIcon from "../../components/InputWithIcon";
import GoogleSignInButton from "../../components/CodeRush/GoogleSignInButton";
import RegisterGuard from "../../components/CodeRush/RegisterGuard";
import { useAuth } from "../../contexts/UserContext";
import { FormEvent, useState } from "react";
import { FirebaseError } from "firebase/app";
import { getMsgFromFirebaseErrorCode } from "../../libs/firebaseError";
import { EVENT_URL_PATH } from "../../libs/urlPaths";

const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

export default function Register() {
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();

    async function onSignUp(e: FormEvent) {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const data = Object.fromEntries(formData);
        
        if (data.password.length < 8) {
            setError("Password must be of atleast length 8");
            return;
        }
        
        if (!PASSWORD_REGEX.test(data.password as string)) {
            setError("Password must contain alphabets and numbers");
            return;
        }
        if (data.password != data.confirm_password) {
            setError("Confirm password did not match.");
            return;
        }
        
        setError("");
        
        try {
            setLoading(true);
            await signUp(data.name as string, data.email as string, data.password as string);
            Navigate({ to: EVENT_URL_PATH.home });
        } catch (err) {
            const _err = err as FirebaseError;
            console.log(_err.message);
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
                <form onSubmit={onSignUp}>
                    <InputWithIcon icon={<FaUserAlt/>} type="text" name="name" placeholder="Name" required/>
                    <InputWithIcon icon={<MdOutlineAlternateEmail/>} type="email" name="email" placeholder="Email" required/>
                    <InputWithIcon icon={<FaLock/>} type="password" name="password" placeholder="Password" required/>
                    <InputWithIcon icon={<FaLock/>} type="password" name="confirm_password" placeholder="Confirm Password" required/>
                    <p className="py-4 text-red-600">{error}</p>
                    <div className="py-4">
                        <button type="submit" disabled={loading} className="w-full py-2 px-4 bg-blue-600 font-medium rounded-md">{loading ? "Signing Up" : "Sign Up"}</button>
                    </div>
                </form>
                <div className="py-12">
                    <p>Already signed up before? <Link className="text-red-500 underline" to={EVENT_URL_PATH.login}>Login</Link></p>
                </div>
            </div>
        </div>
    </RegisterGuard>
    )
}
