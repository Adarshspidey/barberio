import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileRatings = () => {
  const navigate = useNavigate();
  return (
    <div>
      Ratings And Reviews
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>Jhon Doe</div>
    </div>
  );
};

export default ProfileRatings;
