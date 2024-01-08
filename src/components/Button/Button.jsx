import styles from "./Button.module.css";

export default function Button({ secondary, children, className, type }) {
  return (
    <button
      className={`${styles.button} ${
        secondary ? styles["button--secondary"] : ""
      } ${className ?? ''}`}
      type={type || "button"}
    >
      {children}
    </button>
  );
}