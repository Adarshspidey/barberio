import React from "react";
import { useNavigate } from "react-router-dom";
import finish from "../../../assets/Icons/finish.svg";
import BigButton from "../../../Components/Buttons/BigButton";

const ProfileCompleted = () => {
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

      <div className="button-bottom-wrapper">
        <BigButton
          type="orange"
          label="Finish"
          onClick={() => {
            navigate("/shop");
          }}
        />
      </div>
    </div>
  );
};

export default ProfileCompleted;
