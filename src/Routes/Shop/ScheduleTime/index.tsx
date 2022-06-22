import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import SmallButton from "../../../Components/Buttons/SmallButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";

const ScheduleTime = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Schedule Your Worktime</div>

      <div className="content-end">
        <ButtonWithIcon
          type="white"
          label="Schedule By Day"
          onClick={() => {
            navigate("/setup/schedule-by-day");
          }}
        />
      </div>

      <div>Calendar Days</div>
      <div className="input-wrapper">
        <InputField
          label="Start Time"
          onChange={() => {}}
          value=""
          icon={time}
          arrow={arrow}
        />

        <InputField
          label="End Time"
          onChange={() => {}}
          value=""
          icon={time}
          arrow={arrow}
        />
      </div>

      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/interval");
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleTime;
