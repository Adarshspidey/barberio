import { useNavigate } from "react-router-dom";
import BigButton from "../../../Components/Buttons/BigButton";
import IntervalListCard from "../../../Components/IntervalListCard";
import addIcon from "../../../assets/Icons/Add.svg";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import SmallButton from "../../../Components/Buttons/SmallButton";

const ScheduleIntervalList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="content-end content-margin">
        <ButtonWithIcon
          rightIcon={addIcon}
          type="white"
          label="Add"
          onClick={() => {
            navigate("/shop/profile/schedule-interval-form");
          }}
        />
      </div>

      <div
        className="interval-list"
        onClick={() => {
          navigate("/shop/profile/schedule-interval-form");
        }}
      >
        <IntervalListCard />
        <IntervalListCard />
      </div>
      <div className="button-black-save">
        <SmallButton
          type="saveBlack"
          label="Save"
          onClick={() => {
            navigate("/shop/profile/service-interval-by-day");
          }}
        />
      </div>
    </div>
  );
};

export default ScheduleIntervalList;
