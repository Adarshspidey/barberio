import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import IntervalListCard from "../../../Components/IntervalListCard";
const AddInterval = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Intervals</h1>
      <div>
        <div
          onClick={() => {
            navigate("/setup/interval-list");
          }}
        >
          Spa
        </div>
        <IntervalListCard/>
        <div
          onClick={() => {
            navigate("/setup/interval-list");
          }}
        >
          <IntervalListCard/>
        </div>
        <div
          onClick={() => {
            navigate("/setup/interval-list");
          }}
        >
          Hair Cutting
        </div>
      </div>
      <br />
      Common Interval <br /> <br />
      <InputField label="Start Time"
        onChange={() => {}}
        value=""
        icon= {time}
        arrow={arrow}/>
      
      <InputField
        label="End Time"
        onChange={() => {}}
        value=""
        icon= {time}
        arrow={arrow}/>

      <BigButton
        type="primary"
        label="Next"
        onClick={() => {
          navigate("/setup/shop-type");
        }}
      />
    
    </div>
  );
};

export default AddInterval;
