import { useNavigate } from "react-router-dom";
import rupeeicon from "../../assets/Icons/indian-rupee.svg";
import sessionicon from "../../assets/Icons/session.svg";
import serviceicon from "../../assets/Icons/nameofservice.svg";
import descriptionicon from "../../assets/Icons/description.svg";
import arrowDown from "../../assets/Icons/arrow-down.svg";
import InputField from "../Input";
import { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";
import { ValidationError } from "../../Types/Error";
import postCall from "../../Services/postCall";
import { ShopServiceForm, ShopServiceFormError } from "../../Types/Shop";
import useIdleCall from "../../Hooks/useIdleCall";
import SmallButton from "../Buttons/SmallButton";
interface PropsTypes {
  IsButton?: boolean;
  IsDesktop?:boolean;
  type?: "primary" | "secondary";
}

const ServiceForm = ({ IsButton = false,IsDesktop=true }: PropsTypes) => {
  const emptyForm: ShopServiceForm = {
    name: "",
    description: "",
    sessionTime: "",
    rate: "",
  };
  const [serviceFormData, setServiceFormData] = useState<ShopServiceForm>({
    ...emptyForm,
  });
  const { name, description, sessionTime, rate } = serviceFormData;
  const [serviceFormError, setServiceFormError] =
    useState<ShopServiceFormError>({ ...emptyForm });
  const [serviceUpdatingField, setServiceUpdatingField] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  useIdleCall(
    () => {
      serviceUpdatingField && validate(serviceUpdatingField);
    },
    [serviceFormData],
    1000
  );

  const onChange = (key: string, value: string) => {
    setServiceUpdatingField(key);
    setServiceFormData((prev) => ({ ...prev, [key]: value }));
  };
  const onErrorChange = (key: string, value: string) => {
    setServiceFormError((prev) => ({ ...prev, [key]: value }));
  };

  const validate = async (key: string) => {
    setServiceFormError((prev) => ({ ...prev, [key]: "" }));
    const result = await postCall(
      "/services/add-service/validate",
      serviceFormData
    );
    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        if (key === path) onErrorChange(path, message);
      });
    }
  };

  const onSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setSubmit(true);
    const result = await postCall("/services/add-service", serviceFormData);
    console.log(result);
    if (!result?.status) {
      return result.data.forEach(({ path, message }: ValidationError) => {
        onErrorChange(path, message);
      });
    }
    return navigate("/shop/service");
  };

  const navigate = useNavigate();
  return (
    <div >
      <form onSubmit={onSubmit}>
       <div className="service-form-contaner">
        <div className="input-wrapper">
         {/* <div className="select-box">
          <div><img src={serviceicon}/></div>
        <select className="form-select-box">
          <option>Name Of Service</option>
          <option>Hair Cuting</option>
          <option >Spa</option>
          <option >Facial</option>
          <option >Clean up</option>
        </select>
        </div>   */}
        <InputField
          label="Name of Service "
          icon={serviceicon}
          value={name}
          submitted={submit}
          arrow={arrowDown}
          error={serviceFormError.name}
          onChange={(value) => onChange("name", value)}
        />
        <InputField
          label="Description"
          type="textarea"
          icon={descriptionicon}
          value={description}
          submitted={submit}
          error={serviceFormError.description}
          onChange={(value) => onChange("description", value)}
        />
        <InputField
          label=" Time for a session"
          type="number"
          icon={sessionicon}
          value={sessionTime}
          arrow={arrowDown}
          submitted={submit}
          error={serviceFormError.sessionTime}
          onChange={(value) => onChange("sessionTime", value)}
        />
        <InputField
          label=" Rate"
          type="number"
          icon={rupeeicon}
          value={rate}
          submitted={submit}
          error={serviceFormError.rate}
          onChange={(value) => onChange("rate", value)}
        />
      </div>

      {IsButton && (
        <div className="button-end">
          <SmallButton
            type="saveBlack"
            label="Save"
            // onClick={() => {
            //   navigate("/shop/service");
            // }}
          />
        </div>
      )}
    </div>
    <div className="service-form-waper-component">
      <div className="input-wrapper">
        <InputField
          label="Name of Service "
          icon={serviceicon}
          value={name}
          submitted={submit}
          arrow={arrowDown}
          error={serviceFormError.name}
          onChange={(value) => onChange("name", value)}
        />
        <InputField
          label="Description"
          type="textarea"
          icon={descriptionicon}
          value={description}
          submitted={submit}
          error={serviceFormError.description}
          onChange={(value) => onChange("description", value)}
        />
        <InputField
          label=" Time for a session"
          icon={sessionicon}
          value={sessionTime}
          arrow={arrowDown}
          submitted={submit}
          error={serviceFormError.sessionTime}
          onChange={(value) => onChange("sessionTime", value)}
        />
        <InputField
          label=" Rate"
          icon={rupeeicon}
          value={rate}
          submitted={submit}
          error={serviceFormError.rate}
          onChange={(value) => onChange("rate", value)}
        />
      </div>
      </div>
    {IsDesktop  && (
    <div className="desktop-waper-component">
      <div className="peofile-waper-component">
      <InputField
          label="Name of Service "
          icon={serviceicon}
          value={name}
          submitted={submit}
          arrow={arrowDown}
          error={serviceFormError.name}
          onChange={(value) => onChange("name", value)}
        />
        <InputField
          label=" Time for a session"
          icon={sessionicon}
          value={sessionTime}
          arrow={arrowDown}
          submitted={submit}
          error={serviceFormError.sessionTime}
          onChange={(value) => onChange("sessionTime", value)}
        />
        <InputField
          label=" Rate"
          icon={rupeeicon}
          value={rate}
          submitted={submit}
          error={serviceFormError.rate}
          onChange={(value) => onChange("rate", value)}
        />
    </div>
    <div>
        <InputField
          label="Description"
          type="textarea"
          icon={descriptionicon}
          value={description}
          submitted={submit}
          error={serviceFormError.description}
          onChange={(value) => onChange("description", value)}
        />
        <div className="button-end">
          <SmallButton
            type="saveBlack"
            label="Save"
          />
        </div>
      </div>
    </div>
    )
    }
  </form>
    </div>
  );
};

export default ServiceForm;
