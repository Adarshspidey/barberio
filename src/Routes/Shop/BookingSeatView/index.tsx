import { useNavigate } from "react-router-dom";

const BookingSeatView = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>{" "}
      <button
        onClick={() => {
          navigate("/shop/detailed-booking");
        }}
      >
        Service
      </button>
      <button>Disable Queue</button>
      <h1>Seats</h1>
      <button
        onClick={() => {
          navigate("/shop/disable-service");
        }}
      >
        Disable
      </button>
    </div>
  );
};

export default BookingSeatView;
