import React from "react";
import { useNavigate } from "react-router-dom";
import plus from "../../../assets/Icons/plus.svg";
import chair from "../../../assets/Icons/chair-light.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import InputField from "../../../Components/Input";

const NumberOfSeat = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1></h1>
      <InputField
      icon={chair}
        label="Number Of Seats"
        onChange={() => {}}
        value=""
        arrow={plus}/>
      <BigButton
        type="primary"
        label="Next"
        onClick={() => {
          navigate("/setup/profile-completed");
        }}
      />
    </div>
  );
};

export default NumberOfSeat;
