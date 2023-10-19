import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { ParticipantProps } from "../../libs/types";
import { useRegistration } from "../../contexts/RegistrationContext";
import { NOT_PHONE_NO_REGEX } from "../../libs/utils";

const initialValues = { name: "", email: "", phone_number: "", institution: "" }

const StepTwo = () => {
    const [memberInfo, setMemberInfo] = useState<ParticipantProps>(initialValues)
    const { formData, prev, next, setTeamMember } = useRegistration();
    const [currentMemberNo, setMemberNo] = useState(1);
    const formRef = useRef({} as HTMLFormElement);

    useEffect(() => {
        setMemberInfo(v => {
            v = {...v, ...formData.data.team_members[currentMemberNo - 1]};
            return v;
        });
    }, [currentMemberNo, formData.data.team_members])

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      const el = e.target;
      setMemberInfo(v => {
          switch (el.name) {
              case 'email':
                return {...v, email: el.value}
            case 'name':
                return {...v, name: el.value}
            case 'phone_number':
                return {...v, phone_number: el.value.replace(NOT_PHONE_NO_REGEX, '')}
            case 'institution':
                return {...v, institution: el.value}
            default:
                return v;
        }
      })
    }

    function onSubmit (e:FormEvent) {
        e.preventDefault();
        if (!(memberInfo.email && memberInfo.institution && memberInfo.institution && memberInfo.phone_number))
        return;
        setTeamMember(memberInfo, currentMemberNo - 1);
        setMemberInfo(initialValues);
        if(currentMemberNo < formData.teammateCount) setMemberNo(v => ++v);
        else {
            next();
        }
    }
    function goToPrev() {
        if(currentMemberNo !== 1) 
        {
            setMemberNo(v => --v);
        } else prev();
    }
    return (
      <form ref={formRef} onSubmit={onSubmit} className="pt-12 mx-auto max-w-lg w-full">
        <h3 className="pb-4 text-lg font-bold text-center">{currentMemberNo}{currentMemberNo == 1 ? "st" : currentMemberNo == 2 ? "nd" : currentMemberNo == 3 ? "rd" : "th"} Member's Info:</h3>
        <div className="pl-4">
          <label className="text-sm" htmlFor={"team_member_name" + currentMemberNo}>Name:</label>
          <input
            onChange={onChange}
            className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
            type="text"
            name="name"
            value={memberInfo.name}
            id={"team_member.name" + currentMemberNo}
            required
          />
  
          <label className="text-sm" htmlFor={"team_member.email" + currentMemberNo}>Email:</label>
          <input
            onChange={onChange}
            className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
            type="email"
            name="email"
            value={memberInfo.email}
            id={"team_member.email" + currentMemberNo}
            required
          />

          <label className="text-sm" htmlFor={"team_member.phone_number" + currentMemberNo}>Phone Number:</label>
          <div className="flex items-center">
              <span className="pr-1">+880</span>
              <input
                  onChange={onChange}
                  className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
                  type="tel"
                  value={memberInfo.phone_number}
                  name="phone_number"
                  id={"team_member.phone_number" + currentMemberNo}
              />
          </div>
  
          <label className="text-sm" htmlFor={"team_member_" + currentMemberNo}>Institution Name:</label>
          <input
            onChange={onChange}
            className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
            type="text"
            name="institution"
            value={memberInfo.institution}
            id={"team_member_" + currentMemberNo}
            required
          />
        </div>
        
        <div className="py-8 flex justify-between items-center">
        <button
            className="px-4 py-1 rounded-md bg-blue-600 disabled:brightness-50"
            type="button"
            onClick={goToPrev}
        >Prev</button>
            <button
                disabled={!(memberInfo.email && memberInfo.institution && memberInfo.institution && memberInfo.phone_number)}
                className="px-4 py-1 rounded-md bg-blue-600 disabled:brightness-50"
                type="submit"
            >
            Next
            </button>
          </div>
      </form>
    )
  }


export default StepTwo;