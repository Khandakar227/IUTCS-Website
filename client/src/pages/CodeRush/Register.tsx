import { Navigate } from "react-router-dom";
import Loader from "../../components/Loader";
import { useAuth } from "../../contexts/UserContext"
import { PropsWithChildren } from "react";
import {FcGoogle} from 'react-icons/fc';

function RegisterGuard({children}:PropsWithChildren) {
    const { loading, user } = useAuth();
    if (loading != 'loaded')
    return (
        <div className="py-16 px-4 text-center">
            <Loader size="lg" />
        </div>
    )
    else if (user) return <Navigate to={"/coderush"} replace={true}/>

    return (
        <>
        {children}
        </>
  )
}

export default function Register() {
    return (
    <RegisterGuard>
        <div className="grid justify-center items-center py-12 p-4">
            <button className="flex items-center justify-center gap-2 bg-white rounded-md text-black text-sm px-8 py-2 shadow">
                <span>Sign in with Google</span>
                <FcGoogle size={28}/>
            </button>
        </div>
    </RegisterGuard>
    )
}