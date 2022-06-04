import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import registerImage from "../../../assets/Icons/sign.svg";
import "./style.css";

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
      <button>Back</button>
      <div className="form-title">
        join the movement!
        <span>You deserve to look good.</span>
      </div>
      <div className="form-content-container">
        <div className="form-element">
          <form>
            <div className="form-input">
              <label>
                <input type="text" placeholder="Shop Name" />
              </label>
            </div>
            <div className="form-input">
              <label>
                <input type="text" placeholder="Phone Number" />
              </label>
            </div>
            <div className="form-input">
              <label>
                <input type="text" placeholder="Register Number" />
              </label>
            </div>
            <div className="form-input">
              <label>
                <input type="text" placeholder="Owner Name" />
              </label>
            </div>
            <button
              className="register-button"
              onClick={() => {
                navigate("/otp");
              }}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
