import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import arrow from "../../../assets/Icons/arrow-down.svg";
import time from "../../../assets/Icons/time.svg";
import BigButton from "../../../Components/Buttons/BigButton";

const IntervalForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Intervals</div>
      <div className="input-wrapper">
        <InputField
          label="Name of Interval"
          onChange={() => {}}
          value=""
          icon={time}
          arrow={arrow}
        />

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
            navigate("/setup/interval-list");
          }}
        />
      </div>
    </div>
  );
};

export default IntervalForm;
