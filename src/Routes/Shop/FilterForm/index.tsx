import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import serviceicon from "../../../assets/Icons/nameofservice.svg";
import arrowDown from '../../../assets/Icons/arrow-down.svg'
import refund from '../../../assets/Icons/refund.svg'
import calender from '../../../assets/Icons/calender.svg'
import BackButton from "../../../Components/Buttons/BackButton";
import arrowleft from '../../../assets/Icons/arrow-left.svg'
import SmallButton from "../../../Components/Buttons/SmallButton";

const FilterForm = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BackButton
        icon={arrowleft}
        label="back"
        onClick={() => {
          navigate("/shop/service-history");
        }}
      />
    <form className="form-feild-container">
      <InputField
              label="Name of Service "
              icon={serviceicon}
              arrow={arrowDown}
              onChange= {()=>{}}
            />
      <InputField
              label="Refund Status "
              icon={refund}
              arrow={arrowDown}
              onChange= {()=>{}}
            />
      
      <div className="title-component">From</div>
     
      <InputField
              label=" Date"
              icon={calender}
              arrow={arrowDown}
              onChange= {()=>{}}
            />
      <div className="title-component">To</div>
      <InputField
              label=" Date"
              icon={calender}
              arrow={arrowDown}
              onChange= {()=>{}}
            />
      
      <div className="button-end">
        <SmallButton
        type="saveBlack"
        label="Apply"
          onClick={() => {
            navigate("/shop/profile ");
          }}
        />
      </div>
      </form>
    </div>
  );
};

export default FilterForm;
