import { Col, Container, Row } from "react-bootstrap";
import styles from "./Hero.module.css";
import Button from "../Button/Button";

export default function Hero() {
  return (
    <div>
      <div className={`${styles.hero__img}`}></div>
      <div className={`${styles.hero__info}`}>
        <Container>
          <Row className="gy-5 gx-4">
            <Col md={6}>
              <div className="text-center">
                <img
                  className="w-100 object-fit-cover"
                  src="/assets/images/DSC_5199 1.png"
                />
              </div>
            </Col>
            <Col md={6}>
              <div>
                <p className={`${styles.hero__header} mb-2`}>The place</p>
                <p
                  className={`${styles.hero__header} ${styles["hero__header--bold"]} mb-3`}
                >
                  we call home
                </p>
                <p className={`${styles.hero__text} mb-5`}>
                  Makadi Heights is a town built over 3.4 million square meters
                  planned for development, with an elevation reaching 78 meters
                  above sea level guaranteeing magnificent panoramic sea views
                  residential units. Envisioned as a comprehensive town.
                </p>
                <div className="d-flex gap-4">
                  <Button>DOWNLOAD BROCHURE</Button>
                  <Button>SHOW MASTER PLAN</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
