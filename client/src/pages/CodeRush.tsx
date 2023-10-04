import CodeRushNav from "../components/CodeRush/CodeRushNav";
import ComingSoon from "../components/ComingSoon";
import Footer from "../components/Footer";
import AuthContextProvider from "../contexts/UserContext";

function CodeRushPage() {  
  return (
    <>
      <CodeRushNav/>
      <div className="section py-12">
          <ComingSoon />
      </div>
      <Footer/>
    </>
  )
}

export default function CodeRush() {
  return (
    <AuthContextProvider>
      <CodeRushPage/>
    </AuthContextProvider>
  )
}