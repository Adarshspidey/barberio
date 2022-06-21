import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";

const UploadMorePic = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Upload More Image</h1>
      <BigButton
        type="primary"
        label="Next"
        onClick={() => {
          navigate("/setup/add-service");
        }}
        />
    </div>
  );
};

export default UploadMorePic;
