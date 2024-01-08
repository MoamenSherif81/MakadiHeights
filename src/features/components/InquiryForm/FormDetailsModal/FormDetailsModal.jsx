import { Col, Modal, Row } from "react-bootstrap";
import { FaRegCheckCircle } from "react-icons/fa";
import styles from "./FormDetailsModal.module.css";

export default function FormDetailsModal({ isOpen, handleHideModal }) {
  return (
    <Modal show={isOpen} onHide={handleHideModal} centered>
      <div className={`${styles.modal} text-center`}>
        <div className={`${styles.modal__icon} text-success mb-4`}>
          <FaRegCheckCircle />
        </div>
        <div className={`${styles.modal__text} mb-4`}>
          Our representative will call you soon
        </div>
        <div className={`${styles.modal__values} text-start `}>
          <div className="fw-bold mb-3 mb-md-4">Your submitted values: </div>
          <Row>
            <Col md={6} className="mb-2">
              <div>
                <span className="fw-bold">Name: </span> {isOpen.name}
              </div>
            </Col>
            <Col md={6} className="mb-2">
              <div>
                <span className="fw-bold">Email: </span> {isOpen.email}
              </div>
            </Col>
            <Col md={6} className="mb-2">
              <div>
                <span className="fw-bold">Phone: </span> {isOpen.phone}
              </div>
            </Col>
            <Col md={6} className="mb-2">
              <div>
                <span className="fw-bold">Budget: </span> {isOpen.budget}
              </div>
            </Col>
            <Col md={6} className="mb-2">
              <div>
                <span className="fw-bold">Message: </span> {isOpen.message}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
}
