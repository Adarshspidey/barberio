import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const ScheduleIntervalList = ({ setActiveIcon, setIconPath }: PropsType) => {
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
      </button>{" "}
      <br />
      <button
        onClick={() => {
          navigate("/shop/schedule-interval-form");
        }}
      >
        Add
      </button>
      <div className="interval-list">
        <div>Interval 1</div>
        <div>Interval 2</div>
      </div>
      <button
        onClick={() => {
          navigate("/shop/schedule-interval");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ScheduleIntervalList;
