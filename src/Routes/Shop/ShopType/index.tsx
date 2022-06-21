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
      <h1>Shop Type</h1>
      <InputField
        label="Unisexual"
        onChange={() => {}}
        value=""
        icon= {unisexual}
        arrow={arrow}/>
      <BigButton
        type="primary"
        label="Next"
        onClick={() => {
          navigate("/setup/no-of-seat");
        }}
      />
    </div>
  );
};

export default ShopType;
