import { useNavigate } from "react-router-dom";
import SmallButton from "../../../Components/Buttons/SmallButton";
import BackButton from "../../../Components/Buttons/BackButton";
import InputField from "../../../Components/Input";
import arrowDown from '../../../assets/Icons/arrow-down.svg'
import date from '../../../assets/Icons/calender.svg'
import time from '../../../assets/Icons/time.svg'


const DisableService = () => {
  const navigate = useNavigate();

  return (
    <div className="waper-main-container">
      <div className="wrapper-flex-justify-content">
        <div className="edit-profile-title">  Disable Service</div>
      </div>
     
      <div className="radio-button">
        <div className="radio-button-title">
          <input type="radio" />
          Until I manually enable
        </div>
        <div className="radio-button-title">
          <input type="radio" />
          For a Period of Time
        </div>
        
      </div>
      <div>
      <div className="card-title">Ending</div>
      <form className="form-feild-container">
      <InputField 
          label="Date"
          type="text"
          icon={date}
          arrow={arrowDown}
         onChange={() => {}} />

      <InputField 
          label="Time" 
          type="text"
          icon={time}
          arrow={arrowDown}
          onChange={() => {}} />
          <div className="button-end">
            <SmallButton
            type="saveBlack"
            label="Save"
            onClick={() => {
              navigate("/shop/service/add-service-form");
            }}
            /></div>
          
          </form>
      </div>
     
    </div>
  );
};

export default DisableService;
