import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import SmallButton from "../../../Components/Buttons/SmallButton";
import InputField from "../../../Components/Input";

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="wrapper-flex-justify-content">
        <span>Add Offer</span>
        <BackButton />
      </div>
      <InputField label="Offer" onChange={() => {}} />
      <InputField type="textarea" label="Description" onChange={() => {}} />
      <span>Start</span>
      <div className="start">
        <InputField label="Date" onChange={() => {}} />
        <InputField label="Time" onChange={() => {}} />
      </div>
      <span>End</span>
      <div className="start">
        <InputField label="Date" onChange={() => {}} />
        <InputField label="Time" onChange={() => {}} />
      </div>
      <SmallButton label="Add" type="saveBlack" />
    </div>
  );
};

export default EditProfile;
