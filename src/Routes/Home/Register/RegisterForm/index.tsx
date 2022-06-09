import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import registerImage from "../../../../assets/Icons/sign.svg";
import InputField from "../../../../Components/Input";

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
}

const RegisterForm = ({ setHeaderImage }: PropsTypes) => {
  useEffect(() => {
    setHeaderImage(registerImage);
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
      <div className="form-title">
        join the movement!
        <span>You deserve to look good.</span>
      </div>
      <div className="form-content-container">
        <div className="form-element">
          <form>
            <div className="form-container">
              <InputField
                label="Shop Name"
                value=""
                onChange={() => {}}
              />
              <InputField
                label="Phone Number"
                value=""
                onChange={() => {}}
              />
              <InputField
                label="Register Number"
                value=""
                onChange={() => {}}
              />
              <InputField
                label="Owner Name"
                value=""
                onChange={() => {}}
              />
              <button
                className="register-button"
                onClick={() => {
                  navigate("/otp");
                }}
                >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
