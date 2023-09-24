type ActivitiesProps = {
    imgSrc: string,
    heading: string,
    desc: string,
    right?: boolean,
}

export default function ActivitiesCard(props:ActivitiesProps) {
  return (
    <div className={`flex py-6 ${props.right ? "justify-end" : ""} `}>
      <div className={`rounded bg-primary-2 ${props.right ? "border-r-2 border-r-blue-600" : "border-l-2 border-l-blue-600"} bg-clip-padding border border-gray-800`}>
        <div className={`md:flex items-center gap-4 p-4 ${props.right ? "flex-row-reverse" : ""}`}>
          <img
            src={props.imgSrc}
            alt="Activities"
            className="mx-auto max-w-[22rem] w-full p-4"
          />
          <div className="max-w-lg">
            <h3 className="text-3xl pb-6 font-medium font-kanit">{props.heading}</h3>
            <p> {props.desc} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
