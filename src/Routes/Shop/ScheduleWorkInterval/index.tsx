import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";

const ScheduleWorkInterval = () => {
  const navigate = useNavigate();

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
            navigate("/shop/profile/schedule-interval-list");
          }}
        >
          Spa
        </div>
        <div
          onClick={() => {
            navigate("/shop/profile/schedule-interval-list");
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
          navigate("/shop/profile");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ScheduleWorkInterval;
