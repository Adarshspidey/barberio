import React from "react";
import { useNavigate } from "react-router-dom";
import finish from "../../assets/Icons/finish.svg";

const ProfileCompleted = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Profile Completed Successfully</div>
      <div>
        Please recheck your details by going back or You can edit your profile
        by navigating to profile window later.
      </div>
      <img src={finish} alt="finish" />
      <button
        onClick={() => {
          navigate("/shop");
        }}
      >
        Finish
      </button>
    </div>
  );
};

export default ProfileCompleted;
