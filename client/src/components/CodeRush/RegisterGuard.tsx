import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext";
import Loader from "../Loader";

export default function RegisterGuard({children}:PropsWithChildren) {
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