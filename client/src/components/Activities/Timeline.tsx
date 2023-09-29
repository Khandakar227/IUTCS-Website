import { useEffect, useRef, useState } from "react";
import activities from "../../assets/activities.json";

export default function Timeline() {
  return (
    <div className="py-12 px-4 section">
        <p className="text-blue-300"> Activities </p>
        <h3 className="pb-12 text-2xl md:text-4xl font-bold"> IUTCS organizes many events and semonars </h3>
        <div>
        {activities.map((activity, i) => (
            <TimelineCard
                key={activity.title + i}
            title={activity.title}
            description={activity.description}
            image={activity.image}
            timestamp={activity.timestamp}
            />
        ))}
        </div>
    </div>
  );
}

type TimelineCardProps = {
  title: string;
  description: string;
  timestamp: string;
  image: string;
};
const TimelineCard = (props: TimelineCardProps) => {
    const [showLess, setShowLess] = useState(true);
    const imageRef = useRef({} as HTMLImageElement);
    const [description, setDescription] = useState("");
    const [viewMoreButton, setViewMoreButton] = useState(true);
    
    useEffect(() => {
        if (!props.description) return;
        if(props.description.length <= 500) setViewMoreButton(false);
        else setViewMoreButton(true);

        setDescription(showLess ? props?.description.substring(0, 500)+"..." : props?.description)
    
    }, [showLess, props?.description])

    function onViewMore() {
        setShowLess(!showLess);
        console.log(imageRef.current.width, imageRef.current.height)
    }
    return (
    <>
    <div className="py-4">
        <div className="px-4 pt-4 pb-8 rounded-md shadow shadow-black grid lg:grid-cols-2 gap-4 bg-primary-2">
            <div className="flex justify-center items-center">
                <img data-sal="slide-left" data-sal-duration="300" ref={imageRef} className="mx-auto max-w-full max-h-[350px] rounded-md shadow shadow-black" src={props.image} alt={props.title} />
            </div>
            <div>
                <div>
                    <h3 className="py-4 text-2xl font-bold" data-sal="slide-down" data-sal-duration="300" data-sal-delay="200">{props?.title}</h3>
                    <p className="pt-4 text-slate-300" data-sal="slide-down" data-sal-duration="300" data-sal-delay="400">{props?.timestamp}</p>
                    <p className="pt-5 whitespace-pre-wrap overflow-y-clip" data-sal="slide-down" data-sal-duration="300" data-sal-delay="600">{description}</p>
                </div>
                {viewMoreButton && (
                    <div data-sal="slide-down" data-sal-duration="300" data-sal-delay="800">
                        <button onClick={onViewMore} className="my-5 py-2 px-3 rounded-2xl bg-blue-600 text-sm"> {showLess ? "View More" : "Show Less"} </button>
                    </div>
                )}
            </div>
        </div>
    </div>
    </>
  );
};
