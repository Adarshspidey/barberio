import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import UploadIcon from "../../../Components/UploadIcon";

const UploadMorePic = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Upload More Image</div>

      <UploadIcon />

      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/add-service");
          }}
        />
      </div>
    </div>
  );
};

export default UploadMorePic;
