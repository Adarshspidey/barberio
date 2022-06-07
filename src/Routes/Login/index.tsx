import { Dispatch, SetStateAction, useEffect } from "react";
import "./style.css";
import loginImage from "../../assets/Icons/login.svg";
import { useNavigate } from "react-router-dom";

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
}

const Login = ({ setHeaderImage }: PropsTypes) => {
  const navigate = useNavigate();
  useEffect(() => {
    setHeaderImage(loginImage);
  });

  return (
    <div>
      <div>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
        Login With Secret Pin
      </div>

      <div>Welcome Back</div>
      <div>Remember me? I'm your barberio.</div>

      <input type="text" />
      <button
        onClick={() => {
          navigate("/otp");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
