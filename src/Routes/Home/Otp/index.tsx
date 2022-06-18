import {
  Dispatch,
  SyntheticEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import OtpField from "../../../Components/OtpField";
import { useNavigate } from "react-router-dom";
import otpimage from "../../../assets/Icons/otp.svg";
import { OtpForm, OtpFormError } from "../../../Types/Shop";
import postCall from "../../../Services/postCall";
import { ValidationError } from "../../../Types/Error";

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
  phone: string;
  otpGoto: string;
}

const emptyForm: OtpForm = {
  otp: "",
};

const Otp = ({ setHeaderImage, phone, otpGoto }: PropsTypes) => {
  const [otp, setOtp] = useState<string>("");

  const [otpErrorData, setOtpErrorData] = useState<OtpFormError>({
    ...emptyForm,
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const onErrorChange = (key: string, value: string) => {
    setOtpErrorData((prev) => ({ ...prev, [key]: value }));
  };

  const validate = async (key: string) => {
    setOtpErrorData((prev) => ({ ...prev, [key]: "" }));
    const result = await postCall("/auth/otp/validate", otp);
    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        if (key === path) onErrorChange(path, message);
      });
    }
  };

  useEffect(() => {
    setHeaderImage(otpimage);
  });

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const result = await postCall("/auth/otp-verification", {
      phone,
      otp,
    });

    if (!result?.status) {
      console.log(result.data);
      return result.data.forEach(({ path, message }: ValidationError) => {
        onErrorChange(path, message);
      });
      return;
    }
    console.log(result.data);
    result.data && localStorage.setItem("token", result.data.token);
    return navigate(otpGoto);
  };

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

      <form onSubmit={submit}>
        <OtpField
          otp={otp}
          handleOtpChange={(value) => setOtp(value)}
          otpError={otpErrorData.otp}
        />

        <button className="register-button">Verify</button>
      </form>
    </div>
  );
};

export default Otp;
