import Achievements from "../../assets/achievements.json";
import Card, { CardPropsType } from "./Card";

const CategorizedByYears: { [year: number | string]: CardPropsType[] } = {};

Achievements.forEach((card) => {
  const year = new Date(card.timestamp).getFullYear();
  if (!CategorizedByYears[year]) {
    CategorizedByYears[year] = [];
  }
  CategorizedByYears[year].push(card);
});

export default function TimelineSection() {
  return (
    <div className="px-4 py-24  section">
        <p className="text-blue-300" data-sal="slide-down" data-sal-delay="200">Achievements</p>
        <p className="text-5xl font-semibold pb-5 py-2 font-kanit" data-sal="slide-down" data-sal-delay="400">How Far We Have Come</p>
        <div>
        {Object.keys(CategorizedByYears)
            .sort((a, b) => parseInt(b) - parseInt(a))
            .map((year) => (
            <div key={"year "+year}>
                <h2 className="text-4xl md:text-5xl font-semibold pt-24">{year}</h2>
                
                {CategorizedByYears[year].map((achievement, i) => (
                <div className="time-line">
                    <Card
                    key={i + " " + year + "achievement"}
                    description={achievement.description}
                    timestamp={achievement.timestamp}
                    image={achievement.image}
                    />
                </div>
                ))}
            
            </div>
            ))}
        </div>
    </div>
  );
}
