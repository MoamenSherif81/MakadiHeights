import styles from "./FeaturesPagination.module.css";

export default function FeaturesPagination({
  features,
  activeFeature,
  setActiveFeature,
}) {
  return (
    <div className="d-flex gap-3 justify-content-center mt-4">
      {features.map((ele) => (
        <div
          key={`feature-pagination-item-${ele.id}`}
          className={`${styles.pagination__item} ${
            activeFeature == ele.id ? styles["pagination__item--active"] : ""
          }`}
          onClick={() => setActiveFeature(ele.id)}
        ></div>
      ))}
    </div>
  );
}
