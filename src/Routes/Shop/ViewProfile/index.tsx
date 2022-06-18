import { useNavigate } from "react-router-dom";

const ViewProfile = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        onClick={() => {
          navigate("/shop/profile/edit");
        }}
      >
        Edit Profile{" "}
      </div>
      <div
        onClick={() => {
          navigate("/shop/profile/offers");
        }}
      >
        Offers
      </div>
      <div
        onClick={() => {
          navigate("/shop/profile/shop-near-me");
        }}
      >
        Shops Near Me
      </div>
      <div
        onClick={() => {
          navigate("/shop/profile/schedule-work");
        }}
      >
        Schedule Worktime
      </div>
      <div
        onClick={() => {
          navigate("/shop/profile/schedule-interval");
        }}
      >
        Service Time Interval
      </div>
      <div
        onClick={() => {
          navigate("/shop/profile/ratings");
        }}
      >
        Ratings & Reviews
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default ViewProfile;
