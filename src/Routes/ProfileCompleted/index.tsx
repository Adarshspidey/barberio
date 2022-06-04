import React from "react";
import finish from "../../assets/Icons/finish.svg";

const ProfileCompleted = () => {
  return (
    <div>
      <div>Profile Completed Successfully</div>
      <div>
        Please recheck your details by going back or You can edit your profile
        by navigating to profile window later.
      </div>
      <img src={finish} alt="finish" />
      <button>Finish</button>
    </div>
  );
};

export default ProfileCompleted;
