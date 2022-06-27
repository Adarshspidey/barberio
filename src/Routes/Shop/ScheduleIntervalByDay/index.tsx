import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import SmallButton from "../../../Components/Buttons/SmallButton";
import ServiceListComponent from "../../../Components/ServiceListComponent";
import IntervalServiceList from "../IntervalServiceList";

const ScheduleIntervalByDay = () => {
  const navigate = useNavigate();
  return (
    <div>
      <ServiceListComponent
        onClick={() => {
          navigate("/shop/profile/schedule-interval-list");
        }}
      />

      <div className="button-black-save">
        <SmallButton
          type="saveBlack"
          label="Save"
          onClick={() => {
            navigate("/shop/profile/schedule-interval");
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleIntervalByDay;
