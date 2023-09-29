import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { PropsWithChildren } from "react";

export default function IntroCarousel({children}:PropsWithChildren) {
    const [ref] = useKeenSlider<HTMLDivElement>(
    {
    loop: true,
    },
    [
        (slider) => {
          let timeout: ReturnType<typeof setTimeout>
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 3000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )

    return (
        <div ref={ref} className="keen-slider" data-sal="slide-left" data-sal-duration="500" data-sal-delay="1000">
            {children}
        </div>
  )
}

export const IntroSlide = ({children}:PropsWithChildren) => {
    return (
        <div className="keen-slider__slide">{children}</div>
    )
}