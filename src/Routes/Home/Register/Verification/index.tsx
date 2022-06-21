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
      <div>All Done !</div>
      <div>Verification Completed.</div>
      <div>
        You've got this! Just a few more steps. I'll never get in your way.
      </div>
      <div>I Agree to terms and services</div>
      <BigButton
        label="Continue"
        type="primary"
        onClick={() => {
          navigate("/setup");
        }}
      />
        
    </div>
  );
};

export default Verification;
