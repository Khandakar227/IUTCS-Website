import { PropsWithChildren, useEffect } from "react";
import Footer from "../Footer";
import CodeRushNav from "./CodeRushNav";
import AuthContextProvider from "../../contexts/UserContext";
import { useLocation } from "react-router-dom";

export default function CodeRushLayout(props:PropsWithChildren) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    }, [location])

  return (
    <>
    <AuthContextProvider>
      <CodeRushNav/>
      {props.children}
      <Footer/>  
    </AuthContextProvider>
    </>
  )
}
