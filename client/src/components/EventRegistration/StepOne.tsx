import { ChangeEvent, FormEvent } from "react";
import { useRegistration } from "../../contexts/RegistrationContext";

type StepOneProps ={
    max_team_members: number;
}
export default function StepOne(props:StepOneProps) {
    const {formData, next, setTeamName, setTeammatesCount} = useRegistration();

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        console.log(formData.data)
        // const formData = new FormData(e.target as HTMLFormElement);
        if (formData.data.team_name && formData.teammateCount) {
            next();
        }
    }
    
    function setName(e:ChangeEvent) {
        setTeamName((e.target as HTMLInputElement).value);
    }
    return (
        <form onSubmit={onSubmit} className="pt-12 mx-auto max-w-lg w-full">
            <label htmlFor="team_name">Team Name:</label>
            <input
                className="my-2 w-full p-2 rounded outline-none bg-primary-800 shadow shadow-black"
                type="text"
                name="team_name"
                onChange={setName}
                id="team_name"
            />
            <label htmlFor="number_of_members" className="pt-4 block">
                Number of teammates:
            </label>
            {Array(props.max_team_members)
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
                            defaultChecked={formData.teammateCount == i + 1}
                        />
                        <span className="px-2">{i + 1}</span>
                    </label>
                ))}
            <div className="py-8 text-right">
                <button
                    disabled={!(formData.data.team_name && formData.teammateCount)}
                    className="px-4 py-1 rounded-md bg-blue-600 disabled:brightness-50"
                    type="submit"
                >
                Next
                </button>
            </div>
        </form>
    )
}
