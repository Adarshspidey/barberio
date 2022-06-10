import { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import registerImage from "../../../../assets/Icons/sign.svg";
import InputField from "../../../../Components/Input";
import { ShopRegister, ShopRegisterError } from "../../../../Types/Shop";
import postCall from "../../../../Services/postCall";
import {ValidationError} from "../../../../Types/Error"

interface PropsTypes {
  setHeaderImage: Dispatch<SetStateAction<string>>;
}

const emptyForm:ShopRegister = {
  name: "",
  phone: "",
  registerNumber: "",
  ownerName: "",
}

const RegisterForm = ({ setHeaderImage }: PropsTypes) => {

  const [registerFormData, setRegisterFormData] = useState<ShopRegister>({...emptyForm});

  const { name, phone, registerNumber, ownerName } = registerFormData;

  const [registerFormErrorData, setRegisterFormErrorData] = useState<ShopRegisterError>({...emptyForm});

  const [submitted, setSubmitted] = useState<boolean>(false);

  const onChange = (key:string,value:string) => {
    validate(key);
    setRegisterFormData(prev=>({...prev,[key]:value}));
  }

  const onErrorChange = (key:string,value:string) => {
    setRegisterFormErrorData(prev=>({...prev,[key]:value}));
  }

  const validate = async(key:string) => {
    setRegisterFormErrorData(prev=>({...prev,[key]:""}));
    const result = await postCall("/auth/sign-up/validate",registerFormData);
    if(!result?.status){
      return result.data.forEach(({path,message}:ValidationError)=>{
        if(key === path) onErrorChange(path,message);
      })
    }
  }


  useEffect(() => {
    setHeaderImage(registerImage);
  });

  const submit = async(e:SyntheticEvent)=>{
    e.preventDefault();
    setSubmitted(true);
    const result = await postCall("/auth/sign-up",registerFormData);
    if(!result?.status){
      return result.data.forEach(({path,message}:ValidationError)=>{
        onErrorChange(path,message);
      })
    }
    return navigate("/otp");
  }

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
                value={name}
                submitted={submitted}
                error={registerFormErrorData.name}
                onChange={(value) => onChange("name",value)}
              />
              <InputField
                label="Phone Number"
                value={phone}
                submitted={submitted}
                error={registerFormErrorData.phone}
                onChange={(value) => onChange("phone",value)}
              />
              <InputField
                label="Register Number"
                value={registerNumber}
                submitted={submitted}
                error={registerFormErrorData.registerNumber}
                onChange={(value) => onChange("registerNumber",value)}
              />
              <InputField
                label="Owner Name"
                value={ownerName}
                submitted={submitted}
                error={registerFormErrorData.ownerName}
                onChange={(value) => onChange("ownerName",value)}
              />
              <button
                className="register-button"
                type="submit"
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