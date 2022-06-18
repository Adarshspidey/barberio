import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <div>
      Edit Profile
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        back
      </button>
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
      <button
        onClick={() => {
          navigate("/shop/profile");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditProfile;
