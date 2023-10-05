import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext";
import Loader from "../Loader";

export default function CodeRushNav() {
  const { user, loading } = useAuth();
  return (
    <div className="bg-secondary">
      <div className="p-2 section flex justify-between items-center">
        <div>
          <Link to={"/"}>
            <img className="h-10" src="/iutcs-logo.svg" />
          </Link>
        </div>
        <div className="px-4">
          {loading == "loaded" ? (
            !user && (
              <button className="bg-blue-600 px-4 py-2 rounded text-sm font-semibold">
                Register
              </button>
            )
          ) : (
            <Loader size={'xs'} />
          )}
        </div>
      </div>
    </div>
  );
}
