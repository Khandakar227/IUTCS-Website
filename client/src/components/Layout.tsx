import { PropsWithChildren, useLayoutEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import sal from 'sal.js'
import { useLocation } from "react-router-dom";

export default function Layout({children}:PropsWithChildren) {
  const location = useLocation();
  useLayoutEffect(() => {
    sal({
      root: null,
      threshold: 0.4,
      once: false
    });
  }, [location])

  return (
    <>
        <Navbar currentPath={location.pathname}/>
        {children}
        <Footer />
    </>
  )
}
