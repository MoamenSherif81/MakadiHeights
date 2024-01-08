import styles from "./FeatureButton.module.css";

export default function FeatureButton({ title, description, icon, active }) {
  return (
    <div
      className={`${styles.features__button} h-100 ${
        active ? styles["features__button--active"] : ""
      } d-flex flex-column align-items-center gap-2`}
    >
      <div className={styles.feature__button__icon}>{icon}</div>
      <p className={`${styles.feature__button__title} m-0`}>{title}</p>
      <p className={`${styles.feature__button__description} m-0`}>{description}</p>
    </div>
  );
}
