import React from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import RatingCard from "../../../Components/RatingCard";

const ProfileRatings = () => {
  const navigate = useNavigate();
  return (
    <div className="waper-main-container">
      <div className="wrapper-flex-justify-content">
      <div className="edit-profile-title"> Ratings And Reviews</div>
      </div>
      <RatingCard/>
      <RatingCard/>
    </div>
  );
};

export default ProfileRatings;
