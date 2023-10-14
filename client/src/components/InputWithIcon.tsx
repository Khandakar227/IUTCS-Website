import { InputHTMLAttributes, ReactNode } from "react";

interface InputWithIconProps extends InputHTMLAttributes<HTMLInputElement> {
    icon:ReactNode
}

const InputWithIcon = (props:InputWithIconProps) => {

    return(
    <div className="flex py-3 group">
        <div className="group-focus-within:bg-blue-700 bg-primary flex justify-center items-center p-4">
            {props.icon}
        </div>
        <input className="w-full p-3 rounded outline-none bg-primary-800"
            {...props}
        />
    </div>
    )
}

export default InputWithIcon;