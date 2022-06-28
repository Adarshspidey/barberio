import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import CommonInterval from "../../../Components/CommonInterval";

const AddInterval = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="set-up-question">Intervals</div>
      <CommonInterval
        onClickButton={() => {
          navigate("/setup/service-list");
        }}
        onClickList={() => {
          navigate("/setup/interval-form");
        }}
      />

      <div className="button-bottom-wrapper">
        <BigButton
          type="primary"
          label="Next"
          onClick={() => {
            navigate("/setup/add-service");
          }}
        />
      </div>
    </div>
  );
};

export default AddInterval;
