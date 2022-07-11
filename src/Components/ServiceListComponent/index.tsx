import React from "react";
import { useNavigate } from "react-router-dom";
import IntervalListCard from "../IntervalListCard";

interface PropsTypes {
  onClick: () => void;
}

const ServiceListComponent = ({ onClick }: PropsTypes) => {
  const navigate = useNavigate();
  return (
    <div className="service-list service-list-with-margin" onClick={onClick}>
      <IntervalListCard name="Spa" />
      <IntervalListCard name="Facial" />
    </div>
  );
};

export default ServiceListComponent;
