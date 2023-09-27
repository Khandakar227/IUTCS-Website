import AboutSection from "../components/Home/AboutSection";
import ActivitiesSection from "../components/Home/ActivitiesSection";
import BlogSection from "../components/Home/BlogSection";
import EventSection from "../components/Home/EventSection";
import Footer from "../components/Home/Footer";
import IntroSection from "../components/Home/IntroSection";

export default function Home() {
  return (
    <>
      <IntroSection/>
      <AboutSection/>
      <EventSection/>
      <ActivitiesSection/>
      <BlogSection/>
      <Footer />
    </>
  )
}
