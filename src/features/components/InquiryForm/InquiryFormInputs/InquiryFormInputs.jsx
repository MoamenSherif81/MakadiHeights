import { ErrorMessage, Field } from "formik";
import { Fragment } from "react";
import styles from "./InquiryFormInputs.module.css";
import Error from "../../../../components/Error/Error";

export default function InquiryFormInputs({values}) {
  return (
    <Fragment>
      <div className={`${styles.input__group}`}>
        <Field
          className={styles.form__input}
          type="text"
          name="name"
          placeholder="Your name"
        />
        <Error>
          <ErrorMessage name="name" />
        </Error>
      </div>
      <div className={`${styles.input__group}`}>
        <Field
          className={styles.form__input}
          type="email"
          name="email"
          placeholder="Email ID"
        />
        <Error>
          <ErrorMessage name="email" />
        </Error>
      </div>
      <div className={`${styles.input__group}`}>
        <Field
          className={styles.form__input}
          type="text"
          name="phone"
          placeholder="Phone number"
        />
        <Error>
          <ErrorMessage name="phone" />
        </Error>
      </div>
      <div className={`${styles.input__group}`}>
        <Field
          className={`${styles.form__input} ${!values.budget ? styles.form__select__placeholder : ''}`}
          as="select"
          name="budget"
          placeholder="Choose your bugdet"
        >
          <option value="" hidden>Budget</option>
          <option value="option1">1 Million (EGP)</option>
          <option value="option2">5 Million (EGP)</option>
          <option value="option3">15 Million (EGP)</option>
        </Field>
        <Error>
          <ErrorMessage name="budget" />
        </Error>
      </div>
      <div className={`${styles.input__group}`}>
        <Field
          className={`${styles.form__input}`}
          type="text"
          name="message"
          placeholder="Enter you message"
        />
        <Error>
          <ErrorMessage name="message" />
        </Error>
      </div>
      <div className={`${styles.input__group}`}>
        <div className="d-flex align-items-center gap-2 mb-1">
          <Field
            type="checkbox"
            name="agreement"
            placeholder="Enter you message"
          />
          <p style={{ color: "#646464" }} className="mb-0">
            I agree to the processing of personal data
          </p>
        </div>
        <Error>
          <ErrorMessage name="agreement" />
        </Error>
      </div>
    </Fragment>
  );
}
