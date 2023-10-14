import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { EVENT_GET_API } from "../../assets/api";
import Loader from "../../components/Loader";
import { EventProps, ParticipantProps, RegistrationProps } from "../../libs/types";
import { useAuth } from "../../contexts/UserContext";

export default function EventRegistraton() {
  const { eventId } = useParams();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [eventInfo, setEventInfo] = useState<EventProps | null>(null);
  const [registrationDetails, setDetails] = useState<RegistrationProps>({
    team_name: "",
    team_members: [],
    email: "",
    event: ""
  })

  const [teammatesCount, setTeammatesCount] = useState(0);

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
            setDetails(v => ({...v || "", event: eventId as string}));
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
    setDetails(v => ({...v, email: user.email || ""}));
  }, [user])

  useEffect(() => {
    setDetails(v => {
      if(v.team_members.length == teammatesCount) return v;
      while(teammatesCount < v.team_members.length) {
        v.team_members.pop();
      }
      return v;
    })
  }, [teammatesCount])


  function onSubmit(e:FormEvent) {
    e.preventDefault();
    // const formData = new FormData(e.target as HTMLFormElement);
    console.log(registrationDetails)
  }


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
        <form onSubmit={onSubmit} className="mx-auto max-w-lg w-full">
          <label htmlFor="team_name">Team Name:</label>
          <input
            className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
            type="text"
            name="team_name"
            id="team_name"
          />
          <label htmlFor="number_of_members" className="pt-4 block">
            Number of teammates:
          </label>
          {Array(eventInfo?.max_team_members)
            .fill("")
            .map((_, i) => (
              <label key={i + "_team_mates"} className="w-full block">
                <input
                  onClick={() => setTeammatesCount(i + 1)}
                  className="my-2 h-4 w-4"
                  type="radio"
                  id={`teammates_count ${i + 1}`}
                  name="number_of_members"
                  value={i + 1}
                />
                <span className="px-2">{i + 1}</span>
              </label>
            ))}
          <div className="pt-12">
          {Array(teammatesCount).fill("")
          .map((_, i) => (
              <ParticipantsInputs setDetails={setDetails} key={`team_member_${i}`} i={i} />
            ))}
          </div>
          <div className="py-8">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const ParticipantsInputs = ({i, setDetails}:{i:number, setDetails:Dispatch<SetStateAction<RegistrationProps>>}) => {
  function onChange(e:ChangeEvent, idx: number) {
    const el = (e.target as HTMLInputElement);

    setDetails(v => {
      if (!v.team_members[idx]) v.team_members[idx] = { name: "", email: "", institution: "", phone_number: ""}
      const key = el.name.replace('team_members_', '') as keyof ParticipantProps;
      v.team_members[idx][key] = el.value;
      return v;
    }) 
  }
  return (
    <div className="pt-12">
    <label>{i+1}{i == 0 ? "st" : i == 1 ? "nd" : i == 2 ? "rd" : "th"} Member's Info:</label>
    <div className="pl-4">
      <label className="text-sm" htmlFor={"team_member_name" + i}>Name:</label>
      <input
        onChange={(e) => onChange(e, i)}
        className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
        type="text"
        name="team_members_name"
        id={"team_member_name" + i}
      />

      <label className="text-sm" htmlFor={"team_member.email" + i}>Email:</label>
      <input
        onChange={(e) => onChange(e, i)}
        className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
        type="email"
        name="team_members_email"
        id={"team_member.email" + i}
      />
      
      <label className="text-sm" htmlFor={"team_member.phone_number" + i}>Phone Number:</label>
      <input
        onChange={(e) => onChange(e, i)}
        className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
        type="number"
        name="team_members_phone_number"
        id={"team_member.phone_number" + i}
      />

      <label className="text-sm" htmlFor={"team_member_" + i}>Institution Name:</label>
      <input
        onChange={(e) => onChange(e, i)}
        className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
        type="text"
        name="team_members.institution"
        id={"team_member_" + i}
      />
    </div>
  </div>
  )
}