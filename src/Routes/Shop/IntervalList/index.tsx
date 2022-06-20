import { useNavigate } from "react-router-dom";
import IntervalListCard from "../../../Components/IntervalListCard";
import ShopNearCard from "../../../Components/ShopnearCard";

const IntervalList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/setup/interval-form");
        }}
      >
        Add
      </button>
      <div className="interval-list">
        <IntervalListCard/>
        
      </div>
      <button
        onClick={() => {
          navigate("/setup/interval");
        }}
      >
        Save
      </button>
    </div>
  );
};

export default IntervalList;
