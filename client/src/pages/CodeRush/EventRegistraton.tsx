import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { EVENT_GET_API } from "../../assets/api";
import Loader from "../../components/Loader";
import { EventProps } from "../../libs/types";
import StepOne from "../../components/EventRegistration/StepOne";
import RegContextProvider, { useRegistration } from "../../contexts/RegistrationContext";
import StepTwo from "../../components/EventRegistration/StepTwo";
import StepThree from "../../components/EventRegistration/StepThree";
import { useAuth } from "../../contexts/UserContext";

function MultiStepRegistration() {
  const { eventId } = useParams();
  const { user } = useAuth();
  const { formData, setEmail, setEvent } = useRegistration();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [eventInfo, setEventInfo] = useState<EventProps | null>(null);


  useEffect(() => {
    // send request to server to get event data
    try {
      setLoading(true);
      fetch(`${EVENT_GET_API}/${eventId}`)
        .then(res => res.json())
        .then(data => {
          if (!data.event._id) setError("Not found");
          else {
            setEventInfo(data.event);
            setEvent(data.event._id);
          }
          setLoading(false);
        })
    } catch (error) {
      const err = error as Error;
      console.log(err);
      setError(err.message);
      setLoading(false);
    }
  }, [eventId]);

  useEffect(() => {
    if(!user?.email) return;
    setEmail(user?.email);
  }, [user?.email])

  if (loading)
    return (
      <>
        <Loader size="lg" />
      </>
    )
  if (!loading && !eventInfo)
    return (
      <>
        Not found. {error}
      </>
    )

  return (
    <div className="section px-4 py-12">
      <div className="text-center">
        <h1 className="font-semibold py-2 text-3xl">Registration</h1>
        <h1 className="font-semibold py-2 text-xl">{eventInfo?.name}</h1>
      </div>
      <div className="py-6">
        {
          formData.step == 1 ?
          <StepOne max_team_members={eventInfo?.max_team_members || 0}/>
          :
          formData.step == 2 ?
          <StepTwo />
          : <StepThree regFee={eventInfo?.registration_fee || 0} />
        }
      </div>
    </div>
  );
}

export default function EventRegistration() {
  return (
    <RegContextProvider>
      <MultiStepRegistration/>
    </RegContextProvider>
  )
}

