import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import IntervalListCard from "../../../Components/IntervalListCard";
const AddInterval = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Intervals</div>
      <div>
        <div className="input-wrapper">
          <div
            onClick={() => {
              navigate("/setup/interval-list");
            }}
          >
            <IntervalListCard />
          </div>

          <div
            onClick={() => {
              navigate("/setup/interval-list");
            }}
          >
            <IntervalListCard />
          </div>
        </div>
      </div>

      <div className="sub-content-header">Common Interval</div>

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
      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/shop-type");
          }}
        />
      </div>
    </div>
  );
};

export default AddInterval;
