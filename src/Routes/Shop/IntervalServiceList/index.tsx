import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import IntervalListCard from "../../../Components/IntervalListCard";

const IntervalServiceList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Select Service</div>
      <div
        className="service-list"
        onClick={() => {
          navigate("/setup/interval-list");
        }}
      >
        <IntervalListCard name="Spa" />
        <IntervalListCard name="Facial" />
      </div>
      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Save"
          onClick={() => {
            navigate("/setup/interval");
          }}
        />
      </div>
    </div>
  );
};

export default IntervalServiceList;
