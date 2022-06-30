import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../../assets/Icons/arrow-down.svg";
import InputField from "../../../Components/Input";
import unisexual from "../../../assets/Icons/unisexual.svg";
import plus from "../../../assets/Icons/plus.svg";
import chair from "../../../assets/Icons/chair-light.svg";
import minus from "../../../assets/Icons/minus.svg";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const ShopType = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 7,
      goto: () => {
        navigate("/setup/profile-completed");
      },
    }));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Other</div>
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
    </div>
  );
};

export default ShopType;
