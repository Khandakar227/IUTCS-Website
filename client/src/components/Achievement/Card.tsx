export type CardPropsType = {
    title: string;
    description: string,
    image: string,
    timestamp: string
}

const MONTHS = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];


export default function Card(props:CardPropsType) {

    function getDate(date:string) {
        const d = new Date(date);
        
        return `${d.getDate()} ${MONTHS[d.getUTCMonth()]} `
    }
    return (
    <div className="p-4 overflow-hidden">
        <div className="p-4 rounded-md bg-secondary" data-sal="slide-right" data-sal-delay="400" data-sal-duration="500">
            <p className="pt-2 pb-4 font-medium text-gray-300">{getDate(props.timestamp)}</p>
            <h2 className="text-xl font-semibold pb-2">{props.title}</h2>
            <p className="pt-2 pb-4 whitespace-pre-wrap">{props.description}</p>
        </div>
    </div>
  )
}
