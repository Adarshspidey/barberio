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
import { LayOutProps } from "../../../Types/Props";
import phoneIcon from '../../../assets/Icons/phone.svg'
import arrowDown from "../../../assets/Icons/arrow-down.svg";
import BigButton from "../../../Components/Buttons/BigButton";

interface PropsTypes {
  setLayoutProps: Dispatch<SetStateAction<LayOutProps>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setOtpGoto: Dispatch<SetStateAction<string>>;
}

const emptyForm: ShopLogin = {
  phone: "",
};

const Login = ({ setPhone, setOtpGoto, setLayoutProps }: PropsTypes) => {
  useEffect(() => {
    setLayoutProps((prev) => ({
      ...prev,
      headerImage: loginImage,
    }));
  }, []);

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
    setOtpGoto("/shop/booking");
    return navigate("/otp");
  };

  const navigate = useNavigate();

  return (
    <div>
      <div className="login-container">
        <div className="login-screen-pin">Login With Secret Pin</div>
        <div className="login-content-container">
        <div className="content-title">Welcome Back</div>
        <div className="content-discription">Remember me? I'm your barberio.</div>
        </div>
        <form onSubmit={submit}>
          <div className="form-container">
            <InputField
              label="Phone Number"
              icon={phoneIcon}
              value={phone}
              submitted={submitted}
              error={loginErrorData.phone}
              onChange={(value) => onChange("phone", value)}
            />


            <BigButton
              type="secondary"
              label="Login"
            />
          </div>
      </form>
      </div>
    </div>
  );
};

export default Login;
