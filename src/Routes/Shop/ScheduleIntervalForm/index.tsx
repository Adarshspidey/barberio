import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const ScheduleIntervalForm = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(profileActive);
    setIconPath("profile");
  });

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      Name of Interval
      <input type="text" />
      Start Time
      <input type="text" />
      End Time
      <input type="text" />
      <button
        onClick={() => {
          navigate("/shop/schedule-interval-list");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ScheduleIntervalForm;
