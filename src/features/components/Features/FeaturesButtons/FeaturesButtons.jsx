import { Col, Row } from "react-bootstrap";
import styles from "./FeaturesButtons.module.css";
import FeatureButton from "../FeatureButton/FeatureButton";

export default function FeaturesButtons({ features, activeFeature, setActiveFeature }) {
  
  return (
    <Row>
      {features.map((ele) => (
        <Col
          md={6}
          className={styles.features__button}
          key={`features-${ele.id}`}
          onClick={() => setActiveFeature(ele.id)}
        >
          <FeatureButton {...ele} active={activeFeature == ele.id} />
        </Col>
      ))}
    </Row>
  );
}
