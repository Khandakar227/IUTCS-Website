import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { EVENT_GET_API } from "../../assets/api";
import Loader from "../../components/Loader";

export default function EventRegistraton() {
    const { eventId } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [eventInfo, setEventInfo] = useState(null);

    useEffect(() => {
        console.log(eventId);
        // send request to server to get event data
        try {
          setLoading(true);
          fetch(`${EVENT_GET_API}/${eventId}`)
          .then(res => res.json())
          .then(data => {
             if(!data.event._id) setError("Not found");
             else setEventInfo(data.event);
            console.log(eventInfo);
            })
        } catch (error) {
          const err = error as Error;
          console.log(err);
          setError(err.message);
        } finally {
          setLoading(false);
        }

      }, [eventId]);
  
  if(loading)
      return (
      <>
        <Loader size="lg"/>
      </>
  )
  if (!loading && !eventInfo)
    return (
      <>
        Not found. {error}
      </>  
    )
    
  return (
    <div>EventRegistraton</div>
  )
}
