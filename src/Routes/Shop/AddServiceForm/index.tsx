import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import serviceActive from "../../../assets/Icons/Service-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const AddServiceForm = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(serviceActive);
    setIconPath("service");
  });

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
      <div>
        Name of Service <input type="text" />
      </div>
      <div>
        Description <input type="text" />
      </div>
      <div>
        Time for a session <input type="text" />
      </div>
      <div>
        Rate <input type="text" />
      </div>
      <button
        onClick={() => {
          navigate("/shop/service");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default AddServiceForm;
