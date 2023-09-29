import { useEffect } from "react";
import AboutSection from "../components/Home/AboutSection";
import ActivitiesSection from "../components/Home/ActivitiesSection";
import BlogSection from "../components/Home/BlogSection";
import EventSection from "../components/Home/EventSection";
import IntroSection from "../components/Home/IntroSection";
import sal from 'sal.js'

export default function Home() {
  useEffect(() => {
    sal({
      root: null,
      threshold: 0.4,
      once: false
    });
  }, [])

  return (
    <>
      <IntroSection/>
      <AboutSection/>
      <EventSection/>
      <ActivitiesSection/>
      <BlogSection/>
    </>
  )
}
