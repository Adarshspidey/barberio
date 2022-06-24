import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import ShopNearCard from "../../../Components/ShopnearCard";

const ShopNearMe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="wrapper-flex-justify-content">
        <div className="edit-profile-title">Shop Near Me</div>
      </div>
      <div className="shop-card-container">
        <ShopNearCard />
        <ShopNearCard />
      </div>
    </div>
  );
};

export default ShopNearMe;
