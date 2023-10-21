import { CSSProperties } from "react"
import styles from '../../styles/cs.module.css'
import VisibilitySensor from 'react-visibility-sensor';

const text = [
    { t: "C", className: "text-red-600" },
    { t: "o", className: "" },
    { t: "m", className: "" },
    { t: "p", className: "" },
    { t: "u", className: "" },
    { t: "t", className: "" },
    { t: "e", className: "" },
    { t: "r", className: "" },
    { t: " ", className: "" },
    { t: "S", className: "text-red-600" },
    { t: "o", className: "" },
    { t: "c", className: "" },
    { t: "i", className: "" },
    { t: "e", className: "" },
    { t: "t", className: "" },
    { t: "y", className: "" },
]
export default function ComputerSociety() {
    return (
        <VisibilitySensor>
            {
                ({ isVisible }:{isVisible:boolean}) =>
                    <h1 className="font-bold text-[7vw] md:text-[6vw]">
                        {
                            text.map((w, i) =>
                                <span key={i + "text"}
                                    style={{ "--animation-delay": `${i * 50}ms` } as CSSProperties}
                                    className={`${w.className} min-w-[0.5em] inline-block ${styles['preanimation']} ${isVisible ? styles['slide-down-animation'] : ""}`}>
                                    {w.t}
                                </span>)
                        }
                    </h1>
            }
        </VisibilitySensor>
    )
}
