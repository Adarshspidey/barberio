import { useNavigate } from "react-router-dom";

import time from "../../assets/Icons/time.svg";
import arrow from "../../assets/Icons/arrow-down.svg";
import InputField from "../Input";
import BigButton from "../Buttons/BigButton";
import SmallButton from "../Buttons/SmallButton";

interface PropsTypes {
  IsButton?: boolean;
}

const SheduleDayForm = ({ IsButton = false }: PropsTypes) => {
  const navigate = useNavigate();
  return (
    <div>
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
        {!IsButton && (
          <BigButton
            type="primary"
            label="Save"
            onClick={() => {
              navigate("/setup/schedule-time");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default SheduleDayForm;
