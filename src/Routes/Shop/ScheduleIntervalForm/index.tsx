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
      <div className="button-black-save">
        <SmallButton
          type="saveBlack"
          label="Save"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleIntervalForm;
