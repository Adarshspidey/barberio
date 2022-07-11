import { useNavigate } from "react-router-dom";
// import Swiper JS
  import Swiper from 'swiper';
  // import Swiper styles
  import 'swiper/css';

import time from "../../assets/Icons/time.svg";
import arrow from "../../assets/Icons/arrow-down.svg";
import InputField from "../Input";
import BigButton from "../Buttons/BigButton";
import arrowleft from '../../assets/Icons/arrow-left.svg'
import arrowright from '../../assets/Icons/arrow-right.svg'

interface PropsTypes {
  IsButton?: boolean;
}

const SheduleDayForm = ({ IsButton = false }: PropsTypes) => {

  const navigate = useNavigate();
  return (
    <div>
      <div className="input-wrapper">
      <div className="week-container">
        <div className="day-content-container">
        <div className="day-container day-previous">Tuesday</div>
        <div className="day-container">Wednesday</div>
        <div className="day-container day-previous">Thursday</div>
        </div>
        <div className="change-week-container">
          <div className="change-day"><img src={arrowleft} alt="arrow"/></div>
          <div className="change-day"><img src={arrowright} alt="arrow"/></div>
        </div>
      </div>
      
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
