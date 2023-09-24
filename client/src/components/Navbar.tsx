import { Link } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai'

const NavLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Activities", to: "/activities" },
  { label: "Achievements", to: "/achievements" },
  { label: "Executives", to: "/executives" },
  { label: "CodeRush 3.0 Register", to: "/coderush3.0", className: "px-5 py-2 rounded-2xl bg-blue-600 font-bold ml-2 lg:text-sm md:text-xs" },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 p-3 rounded-b-md rounded-bl-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-6xl">
        <div>
          <img className="h-10" src="iutcs-logo.svg" />
        </div>
        <div>
          <button className="md:hidden"><AiOutlineMenu size={24}/></button>
          <ul className="md:flex gap-2 text-sm hidden">
            {NavLinks.map((navlink, i) => (
              <li key={i + navlink.to}>
                <Link
                  className={`${ navlink.className ? navlink.className : "px-3 lg:text-sm md:text-xs" }`}
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
