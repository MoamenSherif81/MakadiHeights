import { Col, Row } from "react-bootstrap";
import styles from "./InquiryForm.module.css";
import { Form, Formik } from "formik";
import Button from "../Button/Button";
import InquiryFormHeader from "../../features/components/InquiryForm/InquiryFormHeader/InquiryFormHeader";
import InquiryFormInputs from "../../features/components/InquiryForm/InquiryFormInputs/InquiryFormInputs";
import inquiryFormSchema from "../../schemas/inquiryFormSchema";
import { useState } from "react";
import FormDetailsModal from "../../features/components/InquiryForm/FormDetailsModal/FormDetailsModal";

export default function InquiryForm() {
  const [isOpen, setIsOpen] = useState(false);

  function handleHideModal() {
    setIsOpen(false)
  }

  return (
    <Row className={`${styles.container} g-0`}>
      <Col md="5">
        <InquiryFormHeader />
      </Col>
      <Col md="7">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            budget: "",
            message: "",
            agreement: "",
          }}
          validationSchema={inquiryFormSchema}
          onSubmit={(values) => setIsOpen(values)}
        >
          {({ values }) => {
            return (
              <Form className={`${styles.form} h-100`}>
                <p className={styles.form__text}>
                  Enter your details and our representative will get back to you
                  shortly
                </p>
                <InquiryFormInputs values={values}/>
                <Button type="submit" secondary className="w-auto">
                  leave a Call request
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Col>
      <FormDetailsModal isOpen={isOpen} handleHideModal={handleHideModal}/>
    </Row>
  );
}
