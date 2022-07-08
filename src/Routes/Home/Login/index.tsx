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
import pinIcon from "../../../assets/Icons/pin.svg";
import BigButton from "../../../Components/Buttons/BigButton";

interface PropsTypes {
  setLayoutProps: Dispatch<SetStateAction<LayOutProps>>;
  setPhone: Dispatch<SetStateAction<string>>;
  setOtpGoto: Dispatch<SetStateAction<string>>;
  setIsLogin:Dispatch<SetStateAction<boolean>>;
  IsPhone?:boolean;
  title?:string;
}

const emptyForm: ShopLogin = {
  phone: "",
  pin:"",
};

const Login = ({ setPhone, setOtpGoto, setLayoutProps,setIsLogin,IsPhone=false,title}: PropsTypes) => {
  useEffect(() => {
    setLayoutProps((prev) => ({
      ...prev,
      headerImage: loginImage,
    }));
  }, []);

  const [loginData, setLoginData] = useState<ShopLogin>({ ...emptyForm });

  const { phone,pin } = loginData;

  const [loginErrorData, setLoginErrorData] = useState<ShopLoginError>({
    ...emptyForm,
  });

  const [currentUpdatingField, setCurrentUpdatingField] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);
  const[isPhone,setIsPhone]= useState<boolean>(false);

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
  
  // const changePhoneHandiler = ()=>{
  //   setIsPhone("Login With Phone")
  // }

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
    setIsLogin(true);
    return navigate("/otp");
  };

  

  const navigate = useNavigate();



  return (
    <div>
      <div className="login-container">
        
        {!isPhone ? <div className="login-screen-pin"
          onClick={() =>{
            setIsPhone(!isPhone)
          }}
        >Login With Secret Pin</div>
      :
      <div className="login-screen-pin"
          onClick={() =>{
            setIsPhone(!isPhone)
          }}
        >Login With Phone</div>
      }
        <div className="login-content-container">
        <div className="content-title">Welcome Back</div>
        <div className="content-discription">Remember me? I'm your barberio.</div>
        </div>
        <form onSubmit={submit}>
          <div className="form-container">
          {!isPhone ?
            <InputField
              label="Phone Number"
              icon={phoneIcon}
              value={phone}
              submitted={submitted}
              error={loginErrorData.phone}
              onChange={(value) => onChange("phone", value)}
            />
            :
            <InputField
              label="Enter Your Secret Pin"
              icon={pinIcon}
              value={pin}
              submitted={submitted}
              error={loginErrorData.pin}
              onChange={(value) => onChange("pin", value)}
            />
            }
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
