import React from "react";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import addplus from "../../assets/Icons/add-plus.svg";
import { useNavigate } from "react-router-dom";
import IntervalListCard from "../IntervalListCard";

const CommonInterval = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="button-end-margin-top">
        <ButtonWithIcon type="white" label="Set By service" />
      </div>
      <div className="sub-content-header">Common Interval</div>
      <div className="button-end service-wrapper">
        <ButtonWithIcon
          rightIcon={addplus}
          type="white"
          label="Add"
          onClick={() => {
            navigate("/setup/interval-form");
          }}
        />
      </div>
      <IntervalListCard />
      <IntervalListCard />
    </div>
  );
};

export default CommonInterval;
