type EventCardProp = {
    mediaSrc: string,
    mediaType: "image" | "video",
    description: string
}

export default function EventCard(props:EventCardProp) {
  return (
    <div className="keen-slider__slide">
        <div className="pt-8 grid lg:grid-cols-2 gap-8 justify-center items-center">
            {
                props.mediaType == "image"
                ?
                <img src={props.mediaSrc} alt="Event" className="mx-auto max-h-96 w-auto rounded-xl overflow-hidden shadow shadow-slate-800"/>
                : props.mediaType == "video"
                ?
                <video autoPlay muted className="rounded-xl overflow-hidden shadow shadow-slate-800 w-full" controls loop>
                <source src={props.mediaSrc} type="video/mp4" />
                Your borwser does not support video tag
            </video>
            : ""
            }
            <div className="py-4 lg:text-xl whitespace-pre-wrap"> {props.description} </div>    
        </div>
    </div>
  )
}
