import { Dispatch, SetStateAction, SyntheticEvent, useEffect,useState} from "react";
import { useNavigate } from "react-router-dom";
import serviceActive from "../../../assets/Icons/Service-active.svg";
import InputField from "../../../Components/Input";
import useIdleCall from "../../../Hooks/useIdleCall";
import postCall from "../../../Services/postCall";
import { ValidationError } from "../../../Types/Error";
import { ShopServiceForm, ShopServiceFormError } from "../../../Types/Shop";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const emptyForm: ShopServiceForm ={
  name:"",
  description:"",
  time: "", 
  rate:""
}

const AddServiceForm = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();
  const [serviceFormData,setServiceFormData] = useState <ShopServiceForm>({...emptyForm});
  const { name,description,time, rate} =serviceFormData
  const [serviceFormError,setSrviceFormError] = useState<ShopServiceFormError>({...emptyForm});
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
    setSrviceFormError(prev=>({...prev,[key]:value}));
  }

  
  const validate = async(key:string) => {
    setSrviceFormError(prev=>({...prev,[key]:""}));
    const result = await postCall("/services/add-service/validate",serviceFormData);
    if(!result?.status){
      return result.data.forEach(({path,message}:ValidationError)=>{
        if(key === path) onErrorChange(path,message);
      })
    }
  }


  useEffect(() => {
    setActiveIcon(serviceActive);
    setIconPath("service");
  });
  
  const onSubmit = async(e:SyntheticEvent)=>{
    e.preventDefault();
    setSubmit(true);
    const result = await postCall('/services/add-service',serviceFormData);
    if(!result?.status){
      return result.data.forEach(({path,message}:ValidationError)=>{
        onErrorChange(path,message);
      })
    }

  }

  return (
    <div>
      Add Service
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <form onSubmit={onSubmit}>
      <div className="form-container">
        <InputField
                label="Name of Service "
                value={name}
                submitted={submit}
                error={serviceFormError.name}
                onChange={(value) => onChange("name",value)}
         />
         <InputField
                label="Description"
                value={description}
                submitted={submit}
                error={serviceFormError.name}
                onChange={(value) => onChange("description",value)}
         />
         <InputField
                label=" Time for a session"
                value={time}
                submitted={submit}
                error={serviceFormError.name}
                onChange={(value) => onChange("time",value)}
         />
         <InputField
                label=" Rate"
                value={rate}
                submitted={submit}
                error={serviceFormError.name}
                onChange={(value) => onChange("rate",value)}
         />      
         <button
        onClick={() => {
          navigate("/shop/service");
        }}
      >
        Save
      </button>
      </div>
      </form>
    </div>
  );
};

export default AddServiceForm;
