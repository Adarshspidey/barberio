import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import verificatioImage from "../../../../assets/Icons/VerificationImage.svg";
import BigButton from "../../../../Components/Buttons/BigButton";
import { LayOutProps } from "../../../../Types/Props";

interface PropsTypes {
  setLayoutProps: Dispatch<SetStateAction<LayOutProps>>;
}

const Verification = ({ setLayoutProps }: PropsTypes) => {
  
  useEffect(() => {
    setLayoutProps(prev=>({
      ...prev,
      headerImage: verificatioImage,
    }))
  },[]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="login-container">
      <div className="content-title">All Done !</div>
      <div className="content-discription">Verification Completed.</div>
      <div className="content-title">
        You've got this! Just a few more steps. I'll never get in your way.
      </div>
      <div className="terms-service-title" >I Agree to terms and services</div>
      <div className="otp-input-feild">
      <BigButton
        label="Continue"
        type="primary"
        onClick={() => {
          navigate("/setup");
        }}
      />
      </div>
      </div>
    </div>
  );
};

export default Verification;
