import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import "./style.css";
import InputField from "../../../Components/Input";
import loginImage from "../../../assets/Icons/login.svg";
import { useNavigate } from "react-router-dom";
import { ShopLogin, ShopLoginError } from "../../../Types/Shop";
import postCall from "../../../Services/postCall";
import { ValidationError } from "../../../Types/Error";
import useIdleCall from "../../../Hooks/useIdleCall";

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setOtpGoto: Dispatch<SetStateAction<string>>;
}

const emptyForm: ShopLogin = {
  phone: "",
};

const Login = ({ setHeaderImage, setPhone, setOtpGoto }: PropsTypes) => {
  const [loginData, setLoginData] = useState<ShopLogin>({ ...emptyForm });

  const { phone } = loginData;

  const [loginErrorData, setLoginErrorData] = useState<ShopLoginError>({
    ...emptyForm,
  });

  const [currentUpdatingField, setCurrentUpdatingField] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);

  useIdleCall(
    () => {
      currentUpdatingField && validate(currentUpdatingField);
    },
    [loginData],
    1000
  );

  const onChange = (key: string, value: string) => {
    setCurrentUpdatingField(key);
    setLoginData((prev) => ({ ...prev, [key]: value }));
  };

  const onErrorChange = (key: string, value: string) => {
    setLoginErrorData((prev) => ({ ...prev, [key]: value }));
  };

  const validate = async (key: string) => {
    setLoginErrorData((prev) => ({ ...prev, [key]: "" }));
    const result = await postCall("/auth/login/validate", loginData);

    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        if (key === path) onErrorChange(path, message);
      });
    }
  };

  useEffect(() => {
    setHeaderImage(loginImage);
  });

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const result = await postCall("/auth/login", loginData);
    if (!result?.status) {
      console.log(result.data);
      return result.data.forEach(({ path, message }: ValidationError) => {
        onErrorChange(path, message);
      });
      return;
    }
    setPhone(loginData.phone);
    setOtpGoto("/shop");
    return navigate("/otp");
  };

  const navigate = useNavigate();

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

      <form onSubmit={submit}>
        <div className="form-container">
          <InputField
            label="Phone Number"
            value={phone}
            submitted={submitted}
            error={loginErrorData.phone}
            onChange={(value) => onChange("phone", value)}
          />

          <button className="register-button" type="submit">
            Login
          </button>
        </div>
      </form>

      {/* <input type="text" />
      <button
        onClick={() => {
          navigate("/otp");
        }}
      >
        Login
      </button> */}
    </div>
  );
};

export default Login;
