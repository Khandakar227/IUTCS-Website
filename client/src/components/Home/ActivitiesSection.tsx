import ActivitiesCard from "./ActivitiesCard";

export default function ActivitiesSection() {
  return (
    <div className="py-24 section">
      <div className="text-center pb-6">
        <p className="font-kanit text-4xl pb-6 font-bold">Here's a glimpse of what we offer</p>
        <p className="max-w-4xl mx-auto">
          We're passionate about fostering growth and knowledge sharing in the
          field of computer science. Our dynamic student body organizes a
          diverse range of activities, ensuring there's something for every tech
          enthusiast.
        </p>
      </div>
      <div className="pt-6">
        <ActivitiesCard
         imgSrc="/activities/programming.svg"
         heading="Competitive Programming Classes"
         desc="Weekly classes are held on competitve programming, Where students learn different algorithms, data tructures and concepts, implement them in problems and improve their problem solving skills."
        />
        <ActivitiesCard
         imgSrc="/activities/ctf.svg"
         heading="Capture The Flag (CTF) Classes and workshops"
         desc="Immerse yourself in the world of cybersecurity guided by our seasoned flag hunters and cybersecurity experts. They will impart their wisdom, offering insights into cryptography, steganography, web exploitations, forensics, reverse engineering and a wealth of other invaluable knowledge."
         right={true}
        />
         <ActivitiesCard
          imgSrc="/activities/development.svg"
          heading="Web and App Development Classes"
          desc="We teach our new comers and enthusiastic coders how to build cool web applications and android apps. We provide resources and guidelines on Web and App development roadmaps for the students."
          />
        <ActivitiesCard
         imgSrc="/activities/Machine learning.svg"
         heading="Machine Learning and Data Science seminars"
         desc="Explore the fascinating world of machine learning in our specialized sessions. Acquire the skills to build intelligent systems and harness the potential of AI technology."
         right={true}
        />
      </div>
    </div>
  );
}
