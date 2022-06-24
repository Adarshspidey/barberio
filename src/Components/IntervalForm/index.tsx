import { useNavigate } from "react-router-dom";
import InputField from "../Input";
import arrow from "../../../assets/Icons/arrow-down.svg";
import time from "../../../assets/Icons/time.svg";
import interval from '../../../assets/Icons/interval.svg'
import BigButton from "../Buttons/BigButton";
import SmallButton from "../Buttons/SmallButton";

interface PropsTypes {
  IsButton?:boolean;
}

const ServiceForm = ({IsButton=false}:PropsTypes) => {
    const navigate = useNavigate();
  return (
    
    <div>
      <div className="set-up-question">Intervals</div>
      <div className="input-wrapper">
        <InputField
          label="Name of Interval"
          onChange={() => {}}
          value=""
          icon={interval}
        
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
      {!IsButton&&
      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Save"
          onClick={() => {
            navigate("/setup/interval-list");
          }}
        />
      </div>
        }

      {IsButton &&
          <div className="button-end">
            <SmallButton
            type="saveBlack"
            label="Save"
            onClick={() => {
             navigate("shop/profile/schedule-interval");
             }}
          />
          </div>
          }
    </div>
  )
}

export default ServiceForm