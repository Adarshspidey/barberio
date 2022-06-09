import { useNavigate } from "react-router-dom";
import { Dispatch, SetStateAction, useEffect } from "react";
import profileActive from "../../../assets/Icons/Profile-active.svg";

interface PropsType {
  setActiveIcon: Dispatch<SetStateAction<string>>;
  setIconPath: Dispatch<SetStateAction<string>>;
}

const ViewProfile = ({ setActiveIcon, setIconPath }: PropsType) => {
  const navigate = useNavigate();

  useEffect(() => {
    setActiveIcon(profileActive);
    setIconPath("profile");
  });

  return (
    <div>
      <div
        onClick={() => {
          navigate("/shop/edit");
        }}
      >
        Edit Profile{" "}
      </div>
      <div
        onClick={() => {
          navigate("/shop/offers");
        }}
      >
        Offers
      </div>
      <div
        onClick={() => {
          navigate("/shop/shop-near-me");
        }}
      >
        Shops Near Me
      </div>
      <div
        onClick={() => {
          navigate("/shop/schedule-work");
        }}
      >
        Schedule Worktime
      </div>
      <div
        onClick={() => {
          navigate("/shop/schedule-interval");
        }}
      >
        Service Time Interval
      </div>
      <div
        onClick={() => {
          navigate("/shop/ratings");
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
