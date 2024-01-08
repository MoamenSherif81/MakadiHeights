import { useMemo } from "react";
import FeaturesPagination from "../FeaturesPagination/FeaturesPagination";

export default function FeaturesSlider({
  features,
  activeFeature,
  setActiveFeature,
}) {
  const activeFeatureData = useMemo(() => {
    return features.find((ele) => ele.id == activeFeature);
  }, [activeFeature, features]);

  return (
    <div> 
      <img
        className="w-100 object-fit-cover"
        style={{ height: "700px", transition: '.2s' }}
        src={activeFeatureData.image}
        alt=""
      />
      <FeaturesPagination
        features={features}
        activeFeature={activeFeature}
        setActiveFeature={setActiveFeature}
      />
    </div>
  );
}
