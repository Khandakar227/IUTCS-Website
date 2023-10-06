import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext";
import Loader from "../Loader";
import Avatar from "./Avatar";

export default function CodeRushNav() {
  const { user, loading } = useAuth();
  return (
    <div className="bg-secondary sticky top-0">
      <div className="p-2 section flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img className="h-10" src="/iutcs-logo.svg" />
          </Link>
        </div>
        <div className="px-4">
          {loading == "loaded" ? (
            !user ? (
              <Link to={"/coderush/register"} className="bg-blue-600 px-4 py-2 rounded text-sm font-semibold">
                Register
              </Link>
            ) : (
              <Avatar displayName={user.displayName} photoURL={user.photoURL} />
            )
          ) : (
            <Loader size={'xs'} />
          )}
        </div>
      </div>
    </div>
  );
}
