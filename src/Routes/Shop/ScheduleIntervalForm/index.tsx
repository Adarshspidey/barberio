import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";
import SmallButton from "../../../Components/Buttons/SmallButton";

const ScheduleIntervalForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* <BackButton/> */}
      Name of Interval
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
      <SmallButton
        type="saveBlack"
        label="Save"
        onClick={() => {
          navigate("/shop/profile/schedule-interval-list");
        }}
      />
    </div>
  );
};

export default ScheduleIntervalForm;
