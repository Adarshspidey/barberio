import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import verificatioImage from "../../../assets/Icons/VerificationImage.svg";

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
}

const Verification = ({ setHeaderImage }: PropsTypes) => {
  useEffect(() => {
    setHeaderImage(verificatioImage);
  });
  const navigate = useNavigate();
  return (
    <div>
      <div>All Done !</div>
      <div>Verification Completed.</div>
      <div>
        You've got this! Just a few more steps. I'll never get in your way.
      </div>
      <div>I Agree to terms and services</div>
      <button
        onClick={() => {
          navigate("/setup");
        }}
      >
        Continue
      </button>
    </div>
  );
};

export default Verification;
