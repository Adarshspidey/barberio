import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import IntervalListCard from "../../../Components/IntervalListCard";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import addplus from "../../../assets/Icons/add-plus.svg";

const AddInterval = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Intervals</div>

      <div className="button-end-with-margin">
        <ButtonWithIcon
          type="white"
          label="Set By Service"
          onClick={() => {
            navigate("/setup/service-list");
          }}
        />
      </div>

      <div className="sub-content-header">Common Interval</div>
      <div className="button-end">
        <ButtonWithIcon
          rightIcon={addplus}
          type="white"
          label="Add"
          onClick={() => {
            navigate("/setup/interval-form");
          }}
        />
      </div>

      <div>
        <div className="input-wrapper">
          <div
            onClick={() => {
              navigate("/setup/interval-list");
            }}
          >
            <IntervalListCard />
          </div>

          <div
            onClick={() => {
              navigate("/setup/interval-list");
            }}
          >
            <IntervalListCard />
          </div>
        </div>
      </div>
      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/shop-type");
          }}
        />
      </div>
    </div>
  );
};

export default AddInterval;
