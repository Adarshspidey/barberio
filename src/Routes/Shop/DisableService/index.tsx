import { useNavigate } from "react-router-dom";

const DisableService = () => {
  const navigate = useNavigate();

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
      <button
        onClick={() => {
          navigate("/shop/service/add-service-form");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default DisableService;
