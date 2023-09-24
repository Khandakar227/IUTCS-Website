export default function AboutSection() {
  return (
    <div className="section grid md:grid-cols-2 gap-4 py-24 circuit-bg-2">
      <div className="grid items-end">
        <div className="pb-10">
          <p className="text-blue-300">About IUT Computer Society</p>
          <h2 className="text-4xl font-bold pt-2 pb-6 font-kanit">
            Who we are and what we stand for.
          </h2>
          <button className="bg-blue-600 rounded-full px-4 py-2 font-semibold"> About us </button>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
}
