import React from "react";
import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import UploadIcon from "../../../Components/UploadIcon";

const UploadLogo = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Your Logo / Brand Image</div>

      <UploadIcon />

      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/upload-cover-pic");
          }}
        />
      </div>
    </div>
  );
};

export default UploadLogo;
