import { useNavigate } from "react-router-dom";

const ScheduleWork = () => {
  const navigate = useNavigate();

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
          navigate("/shop/profile/schedule-work-by-day");
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
          navigate("/shop/profile");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default ScheduleWork;
