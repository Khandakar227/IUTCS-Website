import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="py-28 px-4">
        <img className="w-full max-w-sm mx-auto" src="/not_found.svg" alt="404 not found" />
        <p className="text-center text-lg py-10">The page your looking for is not found. <Link to={"../"} className="underline">Go back</Link></p>
    </div>
  )
}
