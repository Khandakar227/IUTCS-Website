export default function Footer() {
  return (
    <footer className="pt-8 px-4 bg-slate-950">
        <div className="section">
            <div className="flex gap-4 flex-col md:flex-row">
                <img src="iutcs-logo.svg" alt="IUTCS LOGO" className="w-full max-w-[100px]" />
                <div className="py-5 text-sm grid grid-cols-2 md:flex justify-end items-center w-full">
                    <a className="p-2 m-2" href="/">Home</a>
                    <a className="p-2 m-2" href="/about">About</a>
                    <a className="p-2 m-2" href="/activities">Activities</a>
                    <a className="p-2 m-2" href="/achievement">Achievement</a>
                    <a className="p-2 m-2" href="/executives">Executives</a>
                </div>
            </div>
            <hr className="opacity-20" />
            <p className="text-end py-2 text-xs opacity-30">Copyright © 2023 All Rights Reserved by <b>IUTCS</b></p>
        </div>
    </footer>
  )
}
