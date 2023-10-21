import { useEffect, useState } from "react"
import { EVENT_GET_API } from "../../assets/api"
import { toast } from "react-toastify"
import Loader from "../../components/Loader";
import { Link } from "react-router-dom";
import { EVENT_URL_PATH } from "../../libs/urlPaths";
import { EventProps } from "../../libs/types";
 

export default function CodeRush() {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(EVENT_GET_API)
      .then(res => res.json())
      .then(data => {
        if(data.error) toast.error(data.message);
        else setEvents(data.events)
        console.log(data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);
        toast.error(err.message);
      })
  }, [])

  return (
    <>
      <div className="section py-12 min-h-screen">
          {
          loading ? (<Loader size="md"/>)
          :
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              events.map(ev => 
                <Link to={`${EVENT_URL_PATH.home}/event/registration/${ev._id}`} key={ev._id} className="block p-4 rounded-md shadow-black shadow bg-blue-700">
                    <h3 className="text-xl font-medium">{ev.name}</h3>
                </Link>
                )
            }
          </div>
          }
      </div>
    </>
  )
}
