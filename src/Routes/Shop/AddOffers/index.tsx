import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";

const EditProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="wrapper-flex-justify-content">
        <span>Add Offer</span>
        <BackButton />
      </div>
      <input type="text" />
      Description <input type="text" />
      Start
      <div className="start">
        Date <input type="text" />
        Time <input type="text" />
      </div>
      End
      <div className="end">
        Date <input type="text" />
        Time <input type="text" />
      </div>
      <button
        onClick={() => {
          navigate("/shop/profile/offers");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default EditProfile;
