export default function AchievementSection() {
  return (
    <div className="py-24 section">
      <div className="text-center pb-8">
        <p className="text-blue-300">Achievements</p>
        <h2 className="py-2 font-bold md:text-4xl text-3xl font-kanit w-full">
          How far we have come
        </h2>
      </div>
      <div className="achievement-card">
        <div className="grid md:grid-cols-2 gap-8 justify-center items-stretch max-w-2xl rounded-md p-5 shadow-gray-700 shadow-sm">
          <img
            className="max-w-sm w-full rounded-md shadow"
            src="/hackathon_IUT_Pixel.jpg"
            alt="IUT_Pixel at Hackathon"
          />
          <p>
            We gladly inform you that IUT Pixel consists of MD Sabbir
            Rahman(CSE'18), Jaber Hossain Pranto(CSE'18), Ibtid Rahman(CSE'18) and
            Kazi Jarif(CSE'20) have become the Champion of Orbitax SUST SWE
            Technovent Brain Station 23 Hackathon!
            <br />
            <br />
            Congratulations to the team!
          </p>
        </div>
      </div>
    </div>
  );
}
