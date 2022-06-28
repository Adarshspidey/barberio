import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import finish from "../../../assets/Icons/finish.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import { ShopSetupLayOutProps } from "../../../Types/Props";

interface PropsType {
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const ProfileCompleted = ({ setShopSetupLayoutProps }: PropsType) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      goto: () => {
        navigate("/shop/booking");
      },
      buttonType: "orange",
      buttonLabel: "Finish",
    }));

    return () => {
      setShopSetupLayoutProps((prev) => ({
        ...prev,
        buttonLabel: "Next",
      }));
    };
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">All Done</div>
      <div className="input-wrapper">
        <div className="content-title-black">
          Profile Completed Successfully
        </div>
        <div className="content-discription">
          Please recheck your details by going back or You can edit your profile
          by navigating to profile window later.
        </div>
      </div>
      <img src={finish} alt="finish" />
    </div>
  );
};

export default ProfileCompleted;
