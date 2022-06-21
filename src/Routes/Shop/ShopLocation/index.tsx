import React from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import location from "../../../assets/Icons/location.svg";
import BigButton from "../../../Components/Buttons/BigButton";
const ShopLocation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Where is Your Shop Located ?</div>
      
      <InputField label="Location"
        onChange={() => {}}
        value=""
        icon= {location}/>
      
      <InputField label="Address"
        type="textarea"
        onChange={() => {}}
        value=""
        icon= {location}/>
      <BigButton
        type="primary"
        label="Next"

        onClick={() => {
          navigate("/setup/upload-logo");
        }}
      />

    </div>
  );
};

export default ShopLocation;
