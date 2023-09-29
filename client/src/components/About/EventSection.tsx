export default function EventSection() {
  return (
    <>
      <div className="py-24 section grid md:grid-cols-2 gap-8 overflow-hidden">
        <div>
          <p className="text-blue-300" data-sal="slide-down" data-sal-duration="400">Events</p>
          <p className="pb-8 text-xl max-w-lg" data-sal="slide-down" data-sal-duration="400" data-sal-delay="300">
            As a part of our annual activities, IUTCS organizes the following
            events throughout the year.
          </p>
          <p className="pt-4 text-sm" data-sal="slide-down" data-sal-duration="400" data-sal-delay="600">
            The moment of glory for IUTCS came in 2008 when IUTCS organized the ‘IUT
            ICT Fest’ for the first time. Since then, IUTCS is bearing the glory of
            10 years of organizing this fest almost every year.
            <br />
            <br />
            Since its birth, IUTCS has come a long way. Despite being a young
            organization IUTCS promises to have a large impact on the computer
            engineering community of the nation.
          </p>
        </div>
        <div className="p-4 rounded-md bg-primary-2 shadow shadow-black" data-sal="slide-left" data-sal-duration="400">
          <p className="bg-secondary p-3 rounded my-2" data-sal="slide-down" data-sal-duration="400" data-sal-delay="400"> Programming Contest </p>
          <p className="bg-secondary p-3 rounded my-2" data-sal="slide-down" data-sal-duration="400" data-sal-delay="500"> Hackathon </p>
          <p className="bg-secondary p-3 rounded my-2" data-sal="slide-down" data-sal-duration="400" data-sal-delay="600">
            Capture The Flag (CTF)
          </p>
          <p className="bg-secondary p-3 rounded my-2" data-sal="slide-down" data-sal-duration="400" data-sal-delay="700"> IT Olympiad </p>
          <p className="bg-secondary p-3 rounded my-2" data-sal="slide-down" data-sal-duration="400" data-sal-delay="800">E-sports </p>
          <p className="bg-secondary p-3 rounded my-2" data-sal="slide-down" data-sal-duration="400" data-sal-delay="900"> IT Business Case </p>
          <p className="bg-secondary p-3 rounded my-2" data-sal="slide-down" data-sal-duration="400" data-sal-delay="1000"> Workshop & Seminars </p>
        </div>
      </div>
    </>
  );
}
