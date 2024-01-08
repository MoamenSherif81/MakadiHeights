import { Col, Container, Row } from "react-bootstrap";
import styles from "./Features.module.css";
import FeaturesButtons from "../../features/components/Features/FeaturesButtons/FeaturesButtons";
import { useState } from "react";
import {
  Features1Icon,
  Features2Icon,
  Features3Icon,
  Features4Icon,
  Features5Icon,
  Features6Icon,
} from "../../features/components/Features/FeaturesIcons/FeaturesIcons";
import FeaturesSlider from "../../features/components/Features/FeaturesSlider/FeaturesSlider";

const features = [
  {
    id: "feature-1",
    title: "Commercial Areas",
    description: "Downtown Makadi Heights Mall",
    icon: <Features1Icon />,
    image: "/assets/images/feature-1.jpg",
  },
  {
    id: "feature-2",
    title: "Sports Facilities",
    description: "Sports Courts, Fitness Center Water Sports Activities",
    icon: <Features2Icon />,
    image: "/assets/images/feature-2.png",
  },
  {
    id: "feature-3",
    title: "Kids Friendly Areas",
    description: "Kids Aqua Park Kids Areas",
    icon: <Features3Icon />,
    image: "/assets/images/feature-3.jpg",
  },
  {
    id: "feature-4",
    title: "Central Park",
    description: "Far far away, behind the word mountains",
    icon: <Features4Icon />,
    image: "/assets/images/feature-4.jpg",
  },
  {
    id: "feature-5",
    title: "Hotels",
    description: "Far far away, behind the word mountains",
    icon: <Features5Icon />,
    image: "/assets/images/feature-5.jpeg",
  },
  {
    id: "feature-6",
    title: "Medical Facilities",
    description: "Far far away, behind the word mountains",
    icon: <Features6Icon />,
    image: "/assets/images/feature-6.jpg",
  },
];

export default function Features() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);

  return (
    <div className={styles.features}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="mb-4 mb-md-4">
            <div>
              <p className={`${styles["features__sub-header"]} mb-0`}>
                Discover Lifestyle
              </p>
              <p className={`${styles["features__main-header"]} mb-2`}>
                Amentities
              </p>
              <p className={`${styles.features__text} mb-5`}>
                Occupying a land area of 33,000 square meters, Makadi Heights
                {"'"} stunning clubhouse
              </p>
              <FeaturesButtons
                features={features}
                activeFeature={activeFeature}
                setActiveFeature={setActiveFeature}
              />
            </div>
          </Col>
          <Col md={6}>
            <FeaturesSlider
              features={features}
              activeFeature={activeFeature}
              setActiveFeature={setActiveFeature}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
