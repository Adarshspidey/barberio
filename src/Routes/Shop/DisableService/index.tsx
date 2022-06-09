import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import serviceActive from "../../../assets/Icons/Service-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const DisableService = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(serviceActive);
    setIconPath("service");
  });

  return (
    <div>
      Disable Service
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div>
        <input type="radio" />
        Until I manually enable
        <input type="radio" />
        For a Period of Time
      </div>
      Ending
      <div>
        <div>
          Date <input type="text" />
        </div>
        <div>
          Time <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default DisableService;
