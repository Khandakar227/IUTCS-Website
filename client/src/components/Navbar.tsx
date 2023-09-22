import { Link } from "react-router-dom";

const NavLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Activities", to: "/activities" },
  { label: "Achievements", to: "/achievements" },
  { label: "Executives", to: "/executives" },
  { label: "Contact Us", to: "/contact", className: "px-5 py-2 rounded-2xl bg-blue-600 font-bold ml-2" },
];

export default function Navbar() {
  return (
    <nav className="p-3 rounded-b-md rounded-bl-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-6xl">
        <div>
          <img className="h-10" src="iutcs-logo.svg" />
        </div>
        <div>
          <ul className="flex gap-2 text-sm">
            {NavLinks.map((navlink, i) => (
              <li key={i + navlink.to}>
                <Link
                  className={`${ navlink.className ? navlink.className : "px-3" }`}
                  to={navlink.to}
                >
                  {navlink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
