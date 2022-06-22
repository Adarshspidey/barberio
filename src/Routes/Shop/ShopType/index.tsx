import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/Icons/arrow-down.svg";
import InputField from "../../../Components/Input";
import unisexual from "../../../assets/Icons/unisexual.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import plus from "../../../assets/Icons/plus.svg";
import chair from "../../../assets/Icons/chair-light.svg";
import minus from '../../../assets/Icons/minus.svg'

const ShopType = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Shop Type</div>
      <div className="single-input-wrapper">
      <InputField
          icon={chair}
          label="Number Of Seats"
          onChange={() => {}}
          value=""
          arrow={plus}
          leftIcon={minus}
        />
        <InputField
          label="Unisexual"
          onChange={() => {}}
          value=""
          icon={unisexual}
          arrow={arrow}
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

export default ShopType;
