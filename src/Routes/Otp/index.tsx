import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import otpimage from "../../assets/Icons/otp.svg";

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
}

const Otp = ({ setHeaderImage }: PropsTypes) => {
  useEffect(() => {
    setHeaderImage(otpimage);
  });

  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>

      <div>Hi, it's you and me in this together.</div>
      <div>Enter your OTP</div>

      <input type="text" />
      <button
        onClick={() => {
          navigate("/verification");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Otp;
