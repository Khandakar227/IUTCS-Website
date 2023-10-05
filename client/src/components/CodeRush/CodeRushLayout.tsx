import { PropsWithChildren } from "react";
import Footer from "../Footer";
import CodeRushNav from "./CodeRushNav";
import AuthContextProvider from "../../contexts/UserContext";

export default function CodeRushLayout(props:PropsWithChildren) {
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
