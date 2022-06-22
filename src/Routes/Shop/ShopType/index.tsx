import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/Icons/arrow-down.svg";
import InputField from "../../../Components/Input";
import unisexual from "../../../assets/Icons/unisexual.svg";
import BigButton from "../../../Components/Buttons/BigButton";

const ShopType = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Shop Type</div>
      <div className="single-input-wrapper">
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
            navigate("/setup/no-of-seat");
          }}
        />
      </div>
    </div>
  );
};

export default ShopType;
