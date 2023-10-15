import { PropsWithChildren, createContext, useContext, useState } from "react";
import { ParticipantProps, RegistrationProps } from "../libs/types";
import { REGISTRATION_GET_API } from "../assets/api";

type MultistepRegistrationProps = {
    data: RegistrationProps;
    step: number;
    teammateCount: number;
}

type RegistrationContextProps = {
    formData: MultistepRegistrationProps,
    setEmail: (email: string) => void;
    addTeamMember: (team_member: ParticipantProps) => void;
    setEvent: (event: string) => void;
    setTeammatesCount: (teammateCount: number) => void;
    next: () => void;
    prev: () => void;
    setTeamName: (name: string) => void;
    setTeamMember: (team_member: ParticipantProps, idx: number)=> void;
    setPaymentPhoneNo: (n: string) => void;
    setTrxId: (trxId: string) => void;
    registerForEvent: () => Promise<unknown>;
}
const RegistrationContext = createContext<RegistrationContextProps>({} as RegistrationContextProps);

export const useRegistration = () => useContext(RegistrationContext);

export default function RegContextProvider(props: PropsWithChildren) {
    const [formData, setFormData] = useState<MultistepRegistrationProps>({
        data: {
            email: "",
            team_name: "",
            team_members: [],
            event: "",
            payment_phone_number: "",
            trxId: ""
        },
        step: 1,
        teammateCount: 0
    });

    function setEmail(email: string) {
        setFormData(v => ({ ...v, data: { ...v.data, email } }))
    }
    function addTeamMember(team_member: ParticipantProps) {
        setFormData((v) => {
            v.data.team_members.push(team_member);
            return v;
        });
    }
    function setEvent(event: string) {
        setFormData(v => ({ ...v, data: { ...v.data, event } }))
    }
    function next() {
        setFormData(v => ({ ...v, step: v.step + 1 }))
    }
    function prev() {
        setFormData(v => ({ ...v, step: v.step - 1 }))
    }
    function setTeammatesCount(teammateCount: number) {
        setFormData(v => ({ ...v, teammateCount }))
    }
    function setTeamName(name: string) {
        setFormData(v => ({...v, data: {...v.data, team_name: name}}))
    }
    function setTeamMember(team_member: ParticipantProps, idx: number) {
        setFormData((v) => {
            v.data.team_members[idx] = team_member;
            return v;
        });
    }
    function setPaymentPhoneNo(n: string) {
        setFormData(v => ({...v, data: {...v.data, payment_phone_number: n}}))
    }
    function setTrxId(trxId: string) {
        setFormData(v => ({...v, data: {...v.data, trxId}}))
    }
    async function registerForEvent() {
        const headers = new Headers({'Content-Type': 'application/json'});

        const res = await fetch(`${REGISTRATION_GET_API}/${formData.data.event}`, {
            body: JSON.stringify(formData.data),
            credentials: 'include',
            method: 'POST',
            headers,
        });
        return await res.json();
    }

    return (
      <RegistrationContext.Provider
        value={{
          formData,
          setTeamName,
          setEmail,
          setTeamMember,
          addTeamMember,
          setEvent,
          setTeammatesCount,
          setPaymentPhoneNo,
          setTrxId,
          next,
          prev,
          registerForEvent
        }}
      >
        {props.children}
      </RegistrationContext.Provider>
    );
}