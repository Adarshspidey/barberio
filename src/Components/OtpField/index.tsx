import OtpInput from "react-otp-input";

type PropsTypes = {
  otp: string;
  handleOtpChange: (otp: string) => void;
  otpError: string;
  numInputs?: number;
};

const OtpField = ({
  otp,
  handleOtpChange,
  otpError,
  numInputs = 6,
}: PropsTypes) => {
  return (
    <OtpInput
      value={otp}
      onChange={handleOtpChange}
      numInputs={numInputs}
      containerStyle={{ gap: "5px" }}
      hasErrored={otpError !== ""}
      inputStyle={{
        width: "50px",
        height: "50px",
        textAlign: "center",
        background: "var(--input-background-color)",
        border: "none",
        boxShadow: "inset 0px 0px 4px rgba(0, 0, 0, 0.04)",
        borderRadius: "6px",
        fontSize: "var(--slarge)",
      }}
    />
  );
};

export default OtpField;
