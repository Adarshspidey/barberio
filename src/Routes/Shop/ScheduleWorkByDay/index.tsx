
import { useNavigate } from "react-router-dom";


const ScheduleWorkByDay = () => {
  const navigate = useNavigate();

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
