import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import SmallButton from "../../../Components/Buttons/SmallButton";

const BookingSeatView = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="wrapper-flex-justify-content">
        <SmallButton
          type="orange"
          label="Seat"
          onClick={() => {
            navigate("/shop/booking/detailed-booking");
          }}
        />
        <BackButton />
      </div>

      <SmallButton
        type="yellow"
        label="Disable Queue"
        // onClick={() => {
        //   navigate("/shop/booking/detailed-booking");
        // }}
      />

      {/* <button>Disable Queue</button> */}
      <h1>Seats</h1>
      <SmallButton
        type="yellow"
        label="Disable"
        onClick={() => {
          navigate("/shop/disable-service");
        }}
      />
      {/* <button
        onClick={() => {
          navigate("/shop/disable-service");
        }}
      >
        Disable
      </button> */}
    </div>
  );
};

export default BookingSeatView;
