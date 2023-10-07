import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from "react";
import { EVENT_URL_PATH } from "../libs/urlPaths";

const NavLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Activities", to: "/activities" },
  { label: "Achievements", to: "/achievements" },
  { label: "Executives", to: "/executives" },
  { label: "Contact", to: "/contact", className: "hover:text-blue-400 transition-all md:px-5 py-2 md:py-0 lg:text-sm md:text-xs" },
  { label: "CodeRush 3.0 Register",
    to: EVENT_URL_PATH.home,
    className: "my-3 md:my-0 lg:px-5 px-2 py-2 rounded-2xl bg-blue-600 font-bold md:ml-2 lg:text-sm md:text-xs" },
];

export default function Navbar({currentPath}:{currentPath:string}) {
  const [showMobileNav, setShowNav] = useState(false);

  useEffect(() => {
    setShowNav(false);
    window.scrollTo(0, 0);
  }, [currentPath]);

  const closeMobileNav = () => setShowNav(false);
  const openMobileNav = () => setShowNav(true);
  return (
    <nav className="sticky top-0 z-10 p-3 rounded-b-md rounded-bl-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-800">
      <div className="flex items-center justify-between mx-auto max-w-6xl">
        <div>
          <Link to={"/"}>
            <img className="h-10" src="iutcs-logo.svg" />
          </Link>
        </div>
        <div>
          <button className="md:hidden" onClick={openMobileNav}><AiOutlineMenu size={24}/></button>
          <ul className="md:flex gap-2 text-sm hidden items-center">
            {NavLinks.map((navlink, i) => (
              <li
              key={i + navlink.to}
              className={`${ navlink.className ? navlink.className : "lg:px-3 px-1 lg:text-sm md:text-xs" }`}
                  >
                <Link
                  className={currentPath == navlink.to ? "text-blue-300 transition hover:text-blue-400" : "transition hover:text-blue-400"}
                  to={navlink.to}
                >
                  {navlink.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Mobile Nav */}
      <div className={`block md:hidden transition-all duration-1000 ${showMobileNav ? "clip-nav-full" : "clip-nav-0"} fixed top-0 right-0 h-screen overflow-auto py-4 px-4 bg-secondary shadow shadow-black bg-clip-padding z-10`}>
        <div className="flex justify-end pt-2">
          <button onClick={closeMobileNav}><AiOutlineClose size={24}/></button>
        </div>
        <ul className="pt-16">
          {NavLinks.map((navlink, i) => (
              <li
              className={`${ navlink.className ? navlink.className : "px-1 py-3" }`}
              key={i + navlink.to}>
                <Link
                  className={currentPath == navlink.to ? "text-blue-300 transition hover:text-blue-400" : "transition hover:text-blue-400"}
                  to={navlink.to}
                >
                  {navlink.label}
                </Link>
              </li>
            ))}
        </ul>

      </div>
    </nav>
  );
}
