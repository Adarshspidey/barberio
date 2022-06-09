import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const ScheduleWork = ({ setActiveIcon, setIconPath }: PropsType) => {
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
      Schedule Work Time <br />
      <button
        onClick={() => {
          navigate("/shop/schedule-work-by-day");
        }}
      >
        Schedule by Day
      </button>
      <div>Calendar Days</div>
      Start Time
      <input type="text" />
      End Time
      <input type="text" />
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

export default ScheduleWork;
