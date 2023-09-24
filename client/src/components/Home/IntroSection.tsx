export default function IntroSection() {
  return (
    <div className="min-h-main w-full grid justify-center items-center md:grid-cols-2">
        <div className="pl-4 py-20">
            <p className="text-blue-300">Welcome to IUT Computer Society</p>
            <h1 className="md:text-3xl text-xl pt-2 font-kanit">Discover our journey and commitment to the computer engineering community.</h1>
            <p className="md:text-xl py-5">Explore our mission, history, and the impact we've made over the years. Join us in shaping the future of technology together.</p>
        </div>
        <div className="intro-bg md:block hidden " />
        <div className="intro-bg-mobile md:hidden block" />

    </div>
  )
}
