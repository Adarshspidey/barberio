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
import { LayOutProps } from "../../../Types/Props";

interface PropsTypes {
  setLayoutProps: Dispatch<SetStateAction<LayOutProps>>;
  phone: string;
  otpGoto: string;
}

const emptyForm: OtpForm = {
  otp: "",
};

const Otp = ({ setLayoutProps, phone, otpGoto }: PropsTypes) => {

  useEffect(() => {
    setLayoutProps(prev=>({
      ...prev,
      headerImage: otpimage,
    }))
  },[]);
  
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
    result.data && localStorage.setItem("token", result.data.token);
    return navigate(otpGoto);
  };

  const navigate = useNavigate();

  return (
    <div>

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
