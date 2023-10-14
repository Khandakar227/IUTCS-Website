import { useState } from "react"
import { useAuth } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

type AvatarProps = {
    displayName: string | null,
    photoURL?: string | null,
}

export default function Avatar({ displayName, photoURL }: AvatarProps) {
    const [showUserMenu, setUserMenu] = useState(false);
    const navigate = useNavigate();
    const { logOut } = useAuth();

    function clickHandler() {
        setUserMenu(!showUserMenu);
    }
    function onLogOut() {
        const c = confirm("Are you sure you want to sign out now?");
        if(!c) return;
        logOut();
        navigate("/coderush");
    }
    return (
        <div className="relative">
            <img
                className="rounded-3xl shadow shadow-black w-10 h-10 cursor-pointer"
                src={photoURL || `https://api.dicebear.com/7.x/initials/svg?size=40&seed=${displayName}` }
                alt={displayName || "Anonymous user"}
                onClick={clickHandler}
                />
            <div
                className="transition-all absolute right-0 min-w-[150px] text-sm p-2 rounded-md shadow shadow-black bg-secondary"
                style={{clipPath: showUserMenu ? 'circle(100% at 50% 50%)' : 'circle(0.0% at 50% 50%)'}}
            >
                <ul>
                    <li className="border-b">
                        <button className="w-full p-2">Profile</button>
                    </li>
                    <li className="border-b">
                        <button onClick={onLogOut} className="w-full p-2">Sign out</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
