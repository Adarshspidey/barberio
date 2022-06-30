import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import location from "../../../assets/Icons/location.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const ShopLocation = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 0,
      goto: () => {
        navigate("/setup/upload-logo");
      },
    }));
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Where is Your Shop Located ?</div>
      <div className="location-container">
        <div className="input-wrapper">
          <InputField
            label="Location"
            onChange={() => {}}
            value=""
            icon={location}
          />

          <InputField
            label="Address"
            type="textarea"
            onChange={() => {}}
            value=""
            icon={location}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopLocation;
