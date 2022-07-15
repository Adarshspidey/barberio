import { useNavigate } from "react-router-dom";
import SmallButton from "../../../Components/Buttons/SmallButton";
import BackButton from "../../../Components/Buttons/BackButton";
import InputField from "../../../Components/Input";
import arrowDown from '../../../assets/Icons/arrow-down.svg'
import date from '../../../assets/Icons/calender.svg'
import time from '../../../assets/Icons/time.svg'
import { useState } from "react";

interface PropsType {
  isDisableQueue?:boolean;
  disabled?:boolean;
}

const DisableService = ({isDisableQueue = false,disabled = false}:PropsType) => {
  const[checkedIn,setCheckedIn] = useState("enable");
  const navigate = useNavigate();

  const handleChange = (event:any) => {
      setCheckedIn(event.target.value)
  }

  return (
    <div className="waper-main-container">
      <div className="wrapper-flex-justify-content">
      {isDisableQueue ? (
      <div className="edit-profile-title">Disable Queue</div>
        )
        :(
        <div className="edit-profile-title">  Disable Service</div>
        )
        }
      </div>
     
      <div className="radio-button">
        <form>
        <div className="radio-button-title">
          <input type="radio"
          value="enable"
          checked={checkedIn === "enable"}
          onClick={()=>setCheckedIn("enable")}
          onChange={handleChange}
          />
          <label>Until I manually enable</label>
        </div>
        <div className="radio-button-title">
          <input type="radio" 
          value="periodOfTime"
          checked={checkedIn === "periodOfTime"}
          onClick={()=>setCheckedIn("periodOfTime")}
          onChange={handleChange}/>
          <label>For a Period of Time</label>
        </div>
        </form>
      </div>
      <div>
      <div className="card-title">Ending</div>
      <form className="form-feild-container">
      <div className="profile-waper-component">
        <InputField 
          label="Date"
          type="text"
          icon={date}
          arrow={arrowDown}
          onChange={() => {}} 
           isDisabled={checkedIn === "enable"}
         />
        <InputField 
          label="Time" 
          type="text"
          icon={time}
          arrow={arrowDown}
          onChange={() => {}}
          isDisabled={checkedIn === 'enable'} />
          </div>
          <div className="button-end">
            {isDisableQueue?(
            <SmallButton
            type="saveBlack"
            label="Save"
            onClick={() => {
              navigate("/shop/booking/seat");
            }}
            />
            ):(
          <SmallButton
            type="saveBlack"
            label="Save"
            onClick={() => {
              navigate("/shop/service");
              
            }}
            />
            )
          }
            </div>
          
          </form>
      </div>
     
    </div>
  );
};

export default DisableService;
