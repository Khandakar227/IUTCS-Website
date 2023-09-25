import { CSSProperties } from "react"
import IntroCarousel, { IntroSlide } from "./IntroCarousel"

export default function IntroSection() {
  function styleBg(imgUrl:string):CSSProperties {
    return ({
      backgroundImage: `url(${imgUrl})`, backgroundRepeat: "no-repeat",
      backgroundPosition: "left",
      backgroundSize: "cover"
    })
  }

  return (
    <div className="min-h-main w-full grid justify-center items-center md:grid-cols-2">
        <div className="lg:pl-24 pl-8 py-20">
            <p className="text-blue-300">Welcome to IUT Computer Society</p>
            <h1 className="md:text-3xl text-xl pt-2 font-kanit">Discover our journey and commitment to the computer engineering community.</h1>
            <p className="md:text-xl py-5">Explore our mission, history, and the impact we've made over the years. Join us in shaping the future of technology together.</p>
        </div>
        <div className="clip-path max-h-[calc(100vh - 66px)] h-full md:flex hidden overflow-hidden">
          <IntroCarousel >
              <IntroSlide>
                <div style={styleBg("development.jpg")} className="intro-bg w-full" />
              </IntroSlide>
              <IntroSlide>
                <div style={styleBg("inter-iut-pc.jpg")} className="intro-bg w-full" />
              </IntroSlide>
              <IntroSlide>
                <div style={styleBg("ctf_champion.jpg")} className="intro-bg w-full" />
              </IntroSlide>
              <IntroSlide>
                <div style={styleBg("hackathon_IUT_Pixel.jpg")} className="intro-bg w-full" />
              </IntroSlide>
          </IntroCarousel>
        </div>
        <div style={styleBg("development.jpg")} className="intro-bg-mobile md:hidden block" />

    </div>
  )
}
