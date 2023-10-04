import { CSSProperties } from "react";

export default function Loader({size}:{size:number}) {
  return (
    <span style={{ "--loader-size": `${size || 48}px` } as CSSProperties} className="loader"></span>
  )
}
