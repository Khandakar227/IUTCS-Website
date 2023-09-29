import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-8 px-4 bg-slate-950">
        <div className="section">
            <div className="flex gap-4 flex-col md:flex-row">
              <div>
                <img src="iutcs-logo.svg" alt="IUTCS LOGO" className="w-full max-w-[100px]" />
                <div className="flex gap-5 py-4">
                  <a href="https://www.facebook.com/IUTCS"><FaFacebook size={23}/></a>
                  <a href="https://github.com/iut-cse"><FaGithub size={23}/></a>
                  <a href="https://www.instagram.com/iutcs.official/"><FaInstagram size={23}/></a>
                </div>
              </div>
                <div className="py-5 text-sm grid grid-cols-2 md:flex justify-end items-center w-full">
                    <a className="p-2 m-2" href="/">Home</a>
                    <a className="p-2 m-2" href="/about">About</a>
                    <a className="p-2 m-2" href="/activities">Activities</a>
                    <a className="p-2 m-2" href="/achievements">Achievement</a>
                    <a className="p-2 m-2" href="/executives">Executives</a>
                </div>
            </div>
            <hr className="opacity-20" />
            <p className="text-end py-2 text-xs opacity-30">Copyright © 2023 All Rights Reserved by <b>IUTCS</b></p>
        </div>
    </footer>
  )
}
