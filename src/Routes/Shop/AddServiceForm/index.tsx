import { Dispatch, SetStateAction, SyntheticEvent, useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import descriptionicon from "../../../assets/Icons/description.svg"
import rupeeicon from "../../../assets/Icons/indian-rupee.svg"
import sessionicon from "../../../assets/Icons/session.svg"
import serviceicon from "../../../assets/Icons/nameofservice.svg"
import SmallButton from "../../../Components/Buttons/SmallButton";
import InputField from "../../../Components/Input";
import useIdleCall from "../../../Hooks/useIdleCall";
import postCall from "../../../Services/postCall";
import { ValidationError } from "../../../Types/Error";
import { ShopServiceForm, ShopServiceFormError } from "../../../Types/Shop";

const emptyForm: ShopServiceForm ={
  name:"",
  description:"",
  sessionTime: "", 
  rate:""
}

const AddServiceForm = () => {
  const navigate = useNavigate();
  const [serviceFormData,setServiceFormData] = useState <ShopServiceForm>({...emptyForm});
  const { name,description,sessionTime, rate} =serviceFormData
  const [serviceFormError,setServiceFormError] = useState<ShopServiceFormError>({...emptyForm});
  const [serviceUpdatingField, setServiceUpdatingField] = useState<string>("");
  const [submit, setSubmit] = useState<boolean>(false);

  useIdleCall(() => {
    serviceUpdatingField && validate(serviceUpdatingField);
  },[serviceFormData],1000)
  
  const onChange =  (key:string,value:string) => {
    setServiceUpdatingField(key);
    setServiceFormData(prev=>({...prev,[key]:value}));
  }
  const onErrorChange = (key:string,value:string) => {
    setServiceFormError(prev=>({...prev,[key]:value}));
  }

  
  const validate = async(key:string) => {
    setServiceFormError(prev=>({...prev,[key]:""}));
    const result = await postCall("/services/add-service/validate",serviceFormData);
    if(!result?.status){
      return result.data.forEach(({path,message}:ValidationError)=>{
        if(key === path) onErrorChange(path,message);
      })
    }
  } 
  
  const onSubmit = async(e:SyntheticEvent)=>{
    e.preventDefault();
    setSubmit(true);
    const result = await postCall('/services/add-service',serviceFormData);
    console.log(result)
    if(!result?.status){
      return result.data.forEach(({path,message}:ValidationError)=>{
        onErrorChange(path,message);
      })
    }
    return navigate("/shop/service");
  }

  return (
    <div>
      Add Service

      <form onSubmit={onSubmit}>
      <div className="form-container">
        <InputField
                label="Name of Service "
                icon={serviceicon}
                value={name}
                submitted={submit}
                error={serviceFormError.name}
                onChange={(value) => onChange("name",value)}
         />
         <InputField
                label="Description"
                icon={descriptionicon}
                value={description}
                submitted={submit}
                error={serviceFormError.description}
                onChange={(value) => onChange("description",value)}
         />
         <InputField
                label=" Time for a session"
                icon={sessionicon}
                value={sessionTime}
                submitted={submit}
                error={serviceFormError.sessionTime}
                onChange={(value) => onChange("sessionTime",value)}
         />
         <InputField
                label=" Rate"
                icon={rupeeicon}
                value={rate}
                submitted={submit}
                error={serviceFormError.rate}
                onChange={(value) => onChange("rate",value)}
         />      
        <SmallButton
          type="saveBlack"
          label="Save"
        // onClick={() => {
        //   navigate("/shop/service");
        // }}
      />
      
      </div>
      </form>
    </div>
  );
};

export default AddServiceForm;
