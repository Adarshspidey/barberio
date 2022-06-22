
import { useNavigate } from "react-router-dom";
import BackButton from "../../../Components/Buttons/BackButton";
import ShopNearCard from "../../../Components/ShopnearCard";


const ShopNearMe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="wrapper-flex-justify-content">
      <div>ShopNearMe</div>
      <BackButton/>
      </div>
      <ShopNearCard/>
    </div>
  );
};

export default ShopNearMe;
