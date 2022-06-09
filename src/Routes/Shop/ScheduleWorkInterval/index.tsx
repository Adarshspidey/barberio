import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const ScheduleWorkInterval = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(profileActive);
    setIconPath("profile");
  });

  return (
    <div>
      Select Service
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <div className="service-wrapper">
        <div
          onClick={() => {
            navigate("/shop/schedule-interval-list");
          }}
        >
          Spa
        </div>
        <div
          onClick={() => {
            navigate("/shop/schedule-interval-list");
          }}
        >
          Facial
        </div>
      </div>
      Common Intervals
      <div>
        Start Time <input type="text" />{" "}
      </div>
      <div>
        End Time <input type="text" />{" "}
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

export default ScheduleWorkInterval;
