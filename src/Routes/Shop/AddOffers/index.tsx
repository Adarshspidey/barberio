import { useNavigate } from "react-router-dom";
import localoffer from "../../../assets/Icons/local-offer.svg";
import percentage from "../../../assets/Icons/percentage.svg";
import serviceicon from "../../../assets/Icons/nameofservice.svg";
import descriptionicon from "../../../assets/Icons/description.svg";
import SmallButton from "../../../Components/Buttons/SmallButton";
import InputField from "../../../Components/Input";
import arrowDown from "../../../assets/Icons/arrow-down.svg";
import date from "../../../assets/Icons/calender.svg";
import time from "../../../assets/Icons/time.svg";

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="waper-main-container">
      
      <div className="wrapper-flex-justify-content">
        <div className="edit-profile-title"> Add Offer</div>
        {/* <span>Add Offer</span> */}

      </div>
      <form className="form-feild-container">
        <InputField
          label="Name of Service "
          icon={serviceicon}
          type="text"
          arrow={arrowDown}
          onChange={() => {}}
        />
        <InputField
          label="Offer"
          type="text"
          icon={localoffer}
          arrow={percentage}
          onChange={() => {}}
        />
        <InputField
          label="Description"
          type="textarea"
          icon={descriptionicon}
          onChange={() => {}}
        />
        <span>Start</span>
        <div className="start">
          <InputField
            label="Date"
            type="text"
            icon={date}
            onChange={() => {}}
          />
          <InputField
            label="Time"
            type="text"
            icon={time}
            arrow={arrowDown}
            onChange={() => {}}
          />
        </div>

        <span>End</span>
        <div className="start">
          <InputField
            label="Date"
            type="text"
            icon={date}
            arrow={arrowDown}
            onChange={() => {}}
          />

          <InputField
            label="Time"
            type="text"
            icon={time}
            arrow={arrowDown}
            onChange={() => {}}
          />
        </div>
        <div className="button-end">
          <SmallButton
            label="Add"
            type="saveBlack"
            onClick={() => {
              navigate("/shop/profile/offers");
            }}
          />
        </div>
      </form>
    </div>

  );
};

export default EditProfile;
