import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import verificatioImage from "../../../../assets/Icons/VerificationImage.svg";
import BigButton from "../../../../Components/Buttons/BigButton";
import ToggleButton from "../../../../Components/ToggleButton";
import { LayOutProps } from "../../../../Types/Props";

interface PropsTypes {
  setLayoutProps: Dispatch<SetStateAction<LayOutProps>>;
  
}

const Verification = ({ setLayoutProps }: PropsTypes) => {
  const[isChecked,setIsChecked] = useState(false);
  // const[acceptConformation,setAcceptConfermation] =useState("");
  useEffect(() => {
    setLayoutProps((prev) => ({
      ...prev,
      headerImage: verificatioImage,
    }));
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      <div className="login-container">
        <div className="content-title">All Done !</div>
        <div className="content-discription">Verification Completed.</div>
        <div className="content-title">
          You've got this! Just a few more steps. I'll never get in your way.
        </div>
        <div className="terms-service-title">
          {""}
          <label className="toggle-button-container">
          <input type="checkbox"
          onClick={() => {
            setIsChecked(!isChecked);
        }}
        checked={isChecked === true}
          />
          <span className="slider round"></span>
    </label>
          <div className="button-label">I Agree to terms and services</div>
        </div>
        <div className="otp-input-feild">
          {!isChecked&&(
           <BigButton
            label="Continue"
            type="continue"/>
          )
          }
            {isChecked&&(
            <BigButton
              label="Continue"
             type="primary"
              onClick={() => {
              navigate("/setup");
            }}
          />
            )
}
        </div>
      </div>
    </div>
  );
};

export default Verification;
