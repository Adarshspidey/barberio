import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import SmallButton from "../../../Components/Buttons/SmallButton";
import IntervalListCard from "../../../Components/IntervalListCard";
import ShopNearCard from "../../../Components/ShopnearCard";

const IntervalList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <SmallButton
        type="primary"
        label="Add"
        onClick={() => {
          navigate("/setup/interval-form");
        }}
      />
    
      <div className="interval-list">
        <IntervalListCard/>
        
      </div>
      <BigButton
        type="primary"
        label="Save"
        onClick={() => {
          navigate("/setup/interval");
        }}
      />
        
    </div>
  );
};

export default IntervalList;
