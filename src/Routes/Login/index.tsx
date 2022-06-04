import { Dispatch, SetStateAction, useEffect } from "react";
import "./style.css";
import loginImage from "../../assets/Icons/login.svg";

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
}

const Login = ({ setHeaderImage }: PropsTypes) => {
  useEffect(() => {
    setHeaderImage(loginImage);
  });

  return (
    <div>
      <div>
        <button>Back</button>
        Login With Secret Pin
      </div>

      <div>Welcome Back</div>
      <div>Remember me? I'm your barberio.</div>

      <input type="text" />
      <button>Login</button>
    </div>
  );
};

export default Login;
