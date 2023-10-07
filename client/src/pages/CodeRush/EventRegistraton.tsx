import { useEffect } from "react";
import { useParams } from "react-router-dom"

export default function EventRegistraton() {
    const { eventId } = useParams();
    
    useEffect(() => {
        console.log(eventId);
        // send request to server to get event data
    }, [eventId]);

  return (
    <div>EventRegistraton</div>
  )
}
