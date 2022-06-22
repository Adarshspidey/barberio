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
      <div className="set-up-question">Number of Seats</div>

      <div className="single-input-wrapper">
        <InputField
          icon={chair}
          label="Number Of Seats"
          onChange={() => {}}
          value=""
          arrow={plus}
        />
      </div>

      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/profile-completed");
          }}
        />
      </div>
    </div>
  );
};

export default NumberOfSeat;
