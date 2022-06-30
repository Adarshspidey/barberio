// import {
//   Dispatch,
//   SetStateAction,
//   SyntheticEvent,
//   useEffect,
//   useState,
// } from "react";
// import { useNavigate } from "react-router-dom";
// import rupeeicon from "../../../assets/Icons/indian-rupee.svg";
// import sessionicon from "../../../assets/Icons/session.svg";
// import serviceicon from "../../../assets/Icons/nameofservice.svg";
// import descriptionicon from "../../../assets/Icons/description.svg";
// import SmallButton from "../../../Components/Buttons/SmallButton";
// import arrowDown from '../../../assets/Icons/arrow-down.svg'
// import InputField from "../../../Components/Input";
// import useIdleCall from "../../../Hooks/useIdleCall";
// import postCall from "../../../Services/postCall";
// import { ValidationError } from "../../../Types/Error";
// import { ShopServiceForm, ShopServiceFormError } from "../../../Types/Shop";
// import BigButton from "../../../Components/Buttons/BigButton";

// const emptyForm: ShopServiceForm = {
//   name: "",
//   description: "",
//   sessionTime: "",
//   rate: "",
// };

// const AddServiceForm = () => {
//   const navigate = useNavigate();
//   const [serviceFormData, setServiceFormData] = useState<ShopServiceForm>({
//     ...emptyForm,
//   });
//   const { name, description, sessionTime, rate } = serviceFormData;
//   const [serviceFormError, setServiceFormError] =
//     useState<ShopServiceFormError>({ ...emptyForm });
//   const [serviceUpdatingField, setServiceUpdatingField] = useState<string>("");
//   const [submit, setSubmit] = useState<boolean>(false);

//   useIdleCall(
//     () => {
//       serviceUpdatingField && validate(serviceUpdatingField);
//     },
//     [serviceFormData],
//     1000
//   );

//   const onChange = (key: string, value: string) => {
//     setServiceUpdatingField(key);
//     setServiceFormData((prev) => ({ ...prev, [key]: value }));
//   };
//   const onErrorChange = (key: string, value: string) => {
//     setServiceFormError((prev) => ({ ...prev, [key]: value }));
//   };

//   const validate = async (key: string) => {
//     setServiceFormError((prev) => ({ ...prev, [key]: "" }));
//     const result = await postCall(
//       "/services/add-service/validate",
//       serviceFormData
//     );
//     if (!result?.status) {
//       return result.data.forEach(({ path, message }: ValidationError) => {
//         if (key === path) onErrorChange(path, message);
//       });
//     }
//   };

//   const onSubmit = async (e: SyntheticEvent) => {
//     e.preventDefault();
//     setSubmit(true);
//     const result = await postCall("/services/add-service", serviceFormData);
//     console.log(result);
//     if (!result?.status) {
//       return result.data.forEach(({ path, message }: ValidationError) => {
//         onErrorChange(path, message);
//       });
//     }
//     return navigate("/shop/service");
//   };

//   return (
//     <div>
//       <div className="set-up-question">Add Services</div>
//       <form onSubmit={onSubmit}>
//         <div className="form-container">
//           <div className="input-wrapper">
//             <InputField
//               label="Name of Service "
//               icon={serviceicon}
//               value={name}
//               submitted={submit}
//               arrow={arrowDown}
//               error={serviceFormError.name}
//               onChange={(value) => onChange("name", value)}
//             />
//             <InputField
//               label="Description"
//               type="textarea"
//               icon={descriptionicon}
//               value={description}
//               submitted={submit}
//               error={serviceFormError.description}
//               onChange={(value) => onChange("description", value)}
//             />
//             <InputField
//               label=" Time for a session"
//               icon={sessionicon}
//               value={sessionTime}
//               arrow={arrowDown}
//               submitted={submit}
//               error={serviceFormError.sessionTime}
//               onChange={(value) => onChange("sessionTime", value)}
//             />
//             <InputField
//               label=" Rate"
//               icon={rupeeicon}
//               value={rate}
//               submitted={submit}
//               error={serviceFormError.rate}
//               onChange={(value) => onChange("rate", value)}
//             />
//           </div>

//           <div className="button-bottom-wrapper">
//             <BigButton
//               type="primary"
//               label="Save"
//               onClick={() => {
//                 navigate("/setup/add-service");
//               }}
//             />
//           </div>

//           {false && (
//             <SmallButton
//               type="saveBlack"
//               label="Save"
//               onClick={() => {
//                navigate("/shop/service");
//                }}
//             />
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddServiceForm;

import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ServiceForm from "../../../Components/ServiceForm";
import { ShopSetupLayOutProps } from "../../../Types/Props";
interface PropsTypes {
  IsButton?: boolean;
  title?: string;
  setShopSetupLayoutProps: Dispatch<SetStateAction<ShopSetupLayOutProps>>;
}

const AddServiceForm = ({
  IsButton = true,
  setShopSetupLayoutProps,
}: PropsTypes) => {
  useEffect(() => {
    setShopSetupLayoutProps((prev) => ({
      ...prev,
      pageIndex: 4,
      goto: () => {
        navigate("/setup/add-service");
      },
      buttonLabel: "Save",
    }));

    return () => {
      setShopSetupLayoutProps((prev) => ({
        ...prev,
        buttonLabel: "Next",
      }));
    };
  }, []);

  const navigate = useNavigate();

  return (
    <div>
      {!IsButton && <div className="set-up-question">Add Services</div>}
      {IsButton && <div className="edit-profile-title"> Add Services</div>}
      <ServiceForm IsButton={IsButton} />
    </div>
  );
};

export default AddServiceForm;
