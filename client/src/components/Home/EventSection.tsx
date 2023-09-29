import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import EventCard from "./EventCard";
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi';
import { useState } from "react";

export default function EventSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="section py-24">
        <div>
            <p className="text-blue-300" data-sal="slide-down">Events</p>
            <h2 className="py-2 font-bold md:text-4xl text-3xl font-kanit w-full" data-sal="slide-down" data-sal-delay="200"> Upcoming Event </h2>
        </div>
        <div ref={sliderRef} className="keen-slider">
        <EventCard
          delay={300}
          mediaSrc="/prologue-intro.mp4"
          mediaType="video"
          description={`🎉 Get ready to embark on a digital journey like never before! Join us for the thrilling Prologue - IUT Computing Society's Freshers Event. Stay tuned for an unforgettable start to a grand adventure! 🚀
          
📍 Venue: Auditorium
🗓️ Date: 27th September
⏱️ Time: 2.40 pm`}
        />
        <EventCard
          delay={300}
          mediaSrc="web-off-event.jpg"
          mediaType="image"
          description={`Hello WebDev enthusiasts!

Time for all of you to gather around for a GREAT news!
Submit your work up to now and receive feedbacks according to that. This is your chance to be the author of the IUTCS Website that is going to be used in the days to come. Aside from this being an extreme matter of pride, you will also be rewarded handsomely.`}
        />
        <EventCard
          delay={300}
          mediaSrc="cipher_quest.jpg"
          mediaType="image"
          description={`Calling all tech enthusiasts and adventure seekers! Get ready to embark on an unforgettable journey with the IUT Computer Society as we kickstart your University life with an electrifying "Cipher Quest"!!`}
        />
        </div>
        <div className="py-2 flex gap-4 justify-end items-center">
        {loaded && instanceRef.current && (
          <>
          <button className="cursor-pointer hover:bg-secondary transition-all rounded border"
            onClick={() => instanceRef.current?.prev() }
              disabled={currentSlide === 0}
              >
              <BiChevronLeft size={26}/></button>
              <button className="cursor-pointer hover:bg-secondary transition-all rounded border"
              onClick={() => instanceRef.current?.next()
              }
              disabled={currentSlide === instanceRef.current.track.details.slides.length - 1}>
                <BiChevronRight size={26} /></button>
          </>
        )}
        </div>
    </div>
  )
}
