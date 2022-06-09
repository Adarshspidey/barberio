import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const EditProfile = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(profileActive);
    setIconPath("profile");
  });

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
          navigate("/shop/view-profile");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default EditProfile;
