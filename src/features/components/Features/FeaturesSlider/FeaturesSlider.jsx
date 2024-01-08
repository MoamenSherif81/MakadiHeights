import { useMemo, useRef } from "react";
import FeaturesPagination from "../FeaturesPagination/FeaturesPagination";
import { useSwipeable } from "react-swipeable";
import styles from "./FeaturesSlider.module.css";

export default function FeaturesSlider({
  features,
  activeFeature,
  setActiveFeature,
}) {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      const currIndex = features.findIndex((ele) => ele.id == activeFeature);
      if (currIndex != features.length - 1)
        setActiveFeature(features[currIndex + 1].id);
      else setActiveFeature(features[0].id);
    },
    onSwipedRight: () => {
      const currIndex = features.findIndex((ele) => ele.id == activeFeature);
      if (currIndex != 0) setActiveFeature(features[currIndex - 1].id);
      else setActiveFeature(features[features.length - 1].id);
    },
    trackMouse: true,
  });
  const sliderRef = useRef();

  const refPassthrough = (el) => {
    handlers.ref(el);
    sliderRef.current = el;
  };

  const activeFeatureData = useMemo(() => {
    return features.find((ele) => ele.id == activeFeature);
  }, [activeFeature, features]);

  return (
    <div>
      <div {...handlers} ref={refPassthrough}>
        <div
          className={`${styles.slider__img} w-100 object-fit-cover`}
          style={{
            backgroundImage: `url(${activeFeatureData.image})`,
          }}
        ></div>
      </div>
      <FeaturesPagination
        features={features}
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
      />
    </div>
  );
}
