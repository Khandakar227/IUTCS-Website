import { CSSProperties } from "react";
import styles from '../styles/loader.module.css'

export default function Loader({ size }: { size: "xs" | "md" | "lg" }) {
  return (
    <span
      style={{
        "--loader-size": `${size == 'xs' ? 25 : size == 'md' ? 48 : size == 'lg' ? 64 : 48}px`,
        "--border-size": `${size == 'xs' ? 3 : size == 'md' ? 4 : size == 'lg' ? 5 : 4}px`} as CSSProperties}
      className={styles.loader}
    ></span>
  )
}
