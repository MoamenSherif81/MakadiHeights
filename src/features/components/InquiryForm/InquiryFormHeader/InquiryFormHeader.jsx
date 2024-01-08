import styles from './InquiryFormHeader.module.css'

export default function InquiryFormHeader() {
  return (
    <div className={`${styles.form__header__cont} h-100 position-relative`}>
      <div className={`${styles.form__floating__text} position-absolute`}>
        <p className={`${styles["form__floating__sub-header"]} m-0`}>
          Ready for a Home at
        </p>
        <h2 className={`${styles.form__floating__header}`}>Makadi Heights</h2>
      </div>
    </div>
  );
}
