import { useNavigate } from "react-router-dom";
import BackButton from "../../../../Components/Buttons/BackButton";
import SmallButton from "../../../../Components/Buttons/SmallButton";

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="wrapper-flex-justify-content">
      Edit Profile
     <BackButton/>
     </div>
      <div>Images</div>
      <div>
        {" "}
        <input type="text" /> John Doe Salon & Spa
      </div>
      <div>
        {" "}
        <input type="text" /> 428456
      </div>
      <div>
        {" "}
        <input type="text" /> Thiruvananthapuram{" "}
      </div>
      <div>
        {" "}
        <input type="text" /> Address
      </div>
      <div>
        {" "}
        <input type="text" /> 9548695158
      </div>
      <div>
        {" "}
        <input type="text" /> Add Your Email Here
      </div>
      <SmallButton
      type="saveBlack"
      label="Save"
        onClick={() => {
          navigate("/shop/profile");
        }}
      />
    </div>
  );
};

export default EditProfile;
