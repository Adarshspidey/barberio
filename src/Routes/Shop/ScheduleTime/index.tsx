import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import SmallButton from "../../../Components/Buttons/SmallButton";

const ScheduleTime = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SmallButton
        type="white"
        label="Schedule By Day"
        onClick={() => {
          navigate("/setup/schedule-by-day");
        }}
      />
        
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
          navigate("/setup/interval");
        }}
      />
    </div>
  );
};

export default ScheduleTime;
