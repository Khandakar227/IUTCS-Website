export default function IntroSection() {
  return (
    <div className="py-24 grid md:grid-cols-2 gap-5 md:gap-16 px-4 section">
      <div className="py-4 md:py-16">
        <p className="text-blue-300" data-sal="slide-down">About</p>
        <p className="font-semibold text-2xl md:text-4xl font-kanit" data-sal="slide-down" data-sal-duration="400" data-sal-delay="200">
          About IUT Computer Society (IUTCS)
        </p>
        <div className="py-8 md:py-24" data-sal="slide-right" data-sal-duration="400" data-sal-delay="400">
            <img src="prologue-1.jpeg" alt="Prologue IUTCS Freshers" className="w-full rounded-md shadow shadow-black" />
        </div>
      </div>

      <div>
        <p data-sal="slide-down" data-sal-duration="400" data-sal-delay="600">
        IUT Computer Society, established in 2008 by talented Computer Science
        and Engineering students at Islamic University of Technology (IUT), aims
        to impact the national computer engineering community. As a leading
        society at IUT, we provide young engineers with a dynamic platform for
        growth. We organize a range of activities, including programming and
        application development classes, competitions, and collaborative
        projects, fostering intelligence and knowledge sharing.
        <br />
        <br />
        We are extremely delighted to declare that IUTCS was the first
        organization in our nation to successfully organize the "Prime Bank 1st
        IUT National ICT Fest-2008" in August of 2008 and so far continuing to
        uphold this honor for ten years.
        </p>
        <div className="py-8 md:py-16" data-sal="slide-left" data-sal-duration="400" data-sal-delay="400">
            <img src="workshop.jpg" alt="Workshop at IUTCS" className="w-full rounded-md shadow shadow-black" />
        </div>
      </div>
    </div>
  );
}
