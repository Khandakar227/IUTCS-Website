import sal from "sal.js";
import EventSection from "../components/About/EventSection";
import IntroSection from "../components/About/IntroSection";
import MainActivitiesSection from "../components/About/MainActivitiesSection";
import TeamSection from "../components/About/TeamSection";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    sal({
      root: null,
      threshold: 0.3,
      once: false
    });
  }, [])

  return (
    <>
      <IntroSection />
      <MainActivitiesSection />
      <TeamSection />
      <EventSection/>
    </>
  )
}
