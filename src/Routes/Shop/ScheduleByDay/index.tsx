import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";

const ScheduleByDay = () => {
  const navigate = useNavigate();
  return (
    <div>
      Schedule By Day
      <div>Calendar Days</div>
      <InputField label="Start Time"
        onChange={() => {}}
        value=""
        icon= {time}
        arrow={arrow}/>
      
      <InputField label="End Time"
        onChange={() => {}}
        value=""
        icon= {time}
        arrow={arrow}/>

      <BigButton
        type="primary"
        label="Next"
        onClick={() => {
          navigate("/setup/schedule-time");
        }}
      />
      
    </div>
  );
};

export default ScheduleByDay;
