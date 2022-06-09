import React from "react";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const ScheduleWorkByDay = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(profileActive);
    setIconPath("profile");
  });

  return (
    <div>
      Schedule By Day
      <div>Calendar Days</div>
      Start Time
      <input type="text" />
      End Time
      <input type="text" />
      <button
        onClick={() => {
          navigate("/shop/schedule-work");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ScheduleWorkByDay;
