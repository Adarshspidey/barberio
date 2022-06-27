import { useNavigate } from "react-router-dom";
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
    </div>
  );
};

export default AddInterval;
