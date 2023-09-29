export default function AboutSection() {
  return (
    <div className="section grid md:grid-cols-2 gap-4 py-24 circuit-bg-2 overflow-hidden">
      <div className="grid lg:items-end">
        <div className="pb-10">
          <p
            className="text-blue-300"
            data-sal="slide-down"
            data-sal-delay="300"
          >
            About IUT Computer Society
          </p>
          <h2
            className="text-4xl font-bold pt-2 pb-6 font-kanit"
            data-sal="slide-down"
            data-sal-delay="400"
          >
            Who we are and what we stand for.
          </h2>
          <button
            className="bg-blue-600 rounded-full px-4 py-2 font-semibold"
            data-sal="slide-down"
            data-sal-delay="600"
          >
            About us
          </button>
        </div>
      </div>
      <div data-sal="slide-left" data-sal-delay="800" data-sal-duration="500">
        IUTCS, established in 2008 by passionate computer engineers, is a
        platform for young minds to nurture their intellect. Over the years, it
        has evolved into a thriving community offering workshops, programming
        classes, seminars, contests, application development courses,
        co-curricular support, and exciting projects.
        <br />
        <br />
        We are extremely delighted to declare that IUTCS was the first
        organization in our nation to successfully organize the "Prime Bank 1st
        IUT National ICT Fest-2008" in August of 2008 and so far continuing to
        uphold this honor for ten years.
      </div>
    </div>
  );
}
