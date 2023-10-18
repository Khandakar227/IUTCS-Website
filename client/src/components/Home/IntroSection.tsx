import { CSSProperties } from "react";

export default function IntroSection() {
  return (
    <div className="pb-32 bg-gradient-to-b from-blue-950 via-primary to-primary">
        <div className="min-h-main w-full grid place-items-center max-w-6xl mx-auto relative">
            <div className="text-center">
                <p className="text-lg md:text-3xl lg:text-4xl">Islamic University of Technology</p>
                <h1 className="font-bold text-[7vw] md:text-[6vw]">
                    <span className="text-red-600">C</span>omputer <span className="text-red-600">S</span>ociety
                </h1>
                <p className="pt-10 md:text-2xl flex justify-center">
                    <span className="block">A community for</span>
                    <span className="text-animation text-left grid">
                        <span style={{"--animation-delay": '2s'} as CSSProperties} className="underline underline-offset-4 md:underline-offset-8 pl-2 font-semibold decoration-blue-500">Developers </span>
                        <span style={{"--animation-delay": '4s'} as CSSProperties} className="underline underline-offset-4 md:underline-offset-8 pl-2 font-semibold decoration-blue-500">Programmers </span>
                        <span style={{"--animation-delay": '6s'} as CSSProperties} className="underline underline-offset-4 md:underline-offset-8 pl-2 font-semibold decoration-blue-500">Tech Enthusiasts </span>
                        <span style={{"--animation-delay": '8s'} as CSSProperties} className="underline underline-offset-4 md:underline-offset-8 pl-2 font-semibold decoration-blue-500">Learners </span>
                    </span>
                </p>

                <div className="pb-12 text-center flex justify-center absolute bottom-0 left-0 right-0">
                    <img className="max-w-[100px] w-full" src="/intro-arrow-down.gif" alt="Arrow down" />
                </div>
                
            </div>
        </div>
    </div>
  )
}