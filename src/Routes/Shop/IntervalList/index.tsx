import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import IntervalListCard from "../../../Components/IntervalListCard";
import addIcon from "../../../assets/Icons/Add.svg";
import ShopNearCard from "../../../Components/ShopnearCard";

const IntervalList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Intervals</div>
      <div className="content-end">
        <ButtonWithIcon
          rightIcon={addIcon}
          type="white"
          label="Add"
          onClick={() => {
            navigate("/setup/interval-form");
          }}
        />
      </div>

      <div
        className="interval-list"
        onClick={() => {
          navigate("/setup/interval-form");
        }}
      >
        <IntervalListCard />
        <IntervalListCard />
      </div>
      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Save"
          onClick={() => {
            navigate("/setup/interval");
          }}
        />
      </div>
    </div>
  );
};

export default IntervalList;
