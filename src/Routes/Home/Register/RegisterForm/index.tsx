import {
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import registerImage from "../../../../assets/Icons/sign.svg";
import InputField from "../../../../Components/Input";
import { ShopRegister, ShopRegisterError } from "../../../../Types/Shop";
import postCall from "../../../../Services/postCall";
import { ValidationError } from "../../../../Types/Error";
import useIdleCall from "../../../../Hooks/useIdleCall";
import { LayOutProps } from "../../../../Types/Props";
import shopIcon from '../../../../assets/Icons/shop.svg'
import phoneIcon from '../../../../assets/Icons/phone.svg'
import registerIcon from '../../../../assets/Icons/register.svg'
import profileIcon from  '../../../../assets/Icons/profileicon.svg'

interface PropsTypes {
  setOtpGoto: Dispatch<SetStateAction<string>>;
  setLayoutProps: Dispatch<SetStateAction<LayOutProps>>;
}

const emptyForm: ShopRegister = {
  name: "",
  phone: "",
  registerNumber: "",
  ownerName: "",
};

const RegisterForm = ({ setLayoutProps, setOtpGoto }: PropsTypes) => {

  useEffect(() => {
    setLayoutProps(prev=>({
      ...prev,
      headerImage: registerImage,
    }))
  },[]);
  

  const [registerFormData, setRegisterFormData] = useState<ShopRegister>({
    ...emptyForm,
  });

  const { name, phone, registerNumber, ownerName } = registerFormData;

  const [registerFormErrorData, setRegisterFormErrorData] =
    useState<ShopRegisterError>({ ...emptyForm });

  const [currentUpdatingField, setCurrentUpdatingField] = useState<string>("");

  const [submitted, setSubmitted] = useState<boolean>(false);

  useIdleCall(
    () => {
      currentUpdatingField && validate(currentUpdatingField);
    },
    [registerFormData],
    1000
  );

  const onChange = (key: string, value: string) => {
    setCurrentUpdatingField(key);
    setRegisterFormData((prev) => ({ ...prev, [key]: value }));
  };

  const onErrorChange = (key: string, value: string) => {
    setRegisterFormErrorData((prev) => ({ ...prev, [key]: value }));
  };

  const validate = async (key: string) => {
    setRegisterFormErrorData((prev) => ({ ...prev, [key]: "" }));
    const result = await postCall("/auth/sign-up/validate", registerFormData);
    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        if (key === path) onErrorChange(path, message);
      });
    }
  };

 

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const result = await postCall("/auth/sign-up", registerFormData);
    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        onErrorChange(path, message);
      });
    }
    setOtpGoto("/confirmation");
    return navigate("/otp");
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
      <div className="form-title">
        join the movement!
        <span>You deserve to look good.</span>
      </div>
      <div className="form-content-container">
        <div className="form-element">
          <form onSubmit={submit}>
            <div className="form-container">
              <InputField
                label="Shop Name"
                icon={shopIcon}
                value={name}
                submitted={submitted}
                error={registerFormErrorData.name}
                onChange={(value) => onChange("name", value)}
              />
              <InputField
                label="Phone Number"
                icon={phoneIcon}
                value={phone}
                submitted={submitted}
                error={registerFormErrorData.phone}
                onChange={(value) => onChange("phone", value)}
              />
              <InputField
                label="Register Number"
                icon={registerIcon}
                value={registerNumber}
                submitted={submitted}
                error={registerFormErrorData.registerNumber}
                onChange={(value) => onChange("registerNumber", value)}
              />
              <InputField
                label="Owner Name"
                icon={profileIcon}
                value={ownerName}
                submitted={submitted}
                error={registerFormErrorData.ownerName}
                onChange={(value) => onChange("ownerName", value)}
              />
              <button className="register-button" type="submit">
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
