import { useNavigate } from "react-router-dom";
import InputField from "../../../Components/Input";
import time from "../../../assets/Icons/time.svg";
import arrow from "../../../assets/Icons/arrow-down.svg";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import SmallButton from "../../../Components/Buttons/SmallButton";

const ScheduleWork = () => {
  const navigate = useNavigate();

  return (
    <div className="waper-main-container">
      <div className="wrapper-flex-justify-content">
        <div className="edit-profile-title"> Schedule Your Worktime</div>
        {/* <BackButton /> */}
      </div>
      <div className="content-end">
        <ButtonWithIcon
          type="white"
          label="Schedule By Day"
          onClick={() => {
            navigate("/shop/profile/schedule-working-day");
          }}
        />
      </div>

      <div>Calendar Days</div>
      <div className="input-wrapper">
        <InputField
          label="Start Time"
          onChange={() => {}}
          value=""
          icon={time}
          arrow={arrow}
        />

        <InputField
          label="End Time"
          onChange={() => {}}
          value=""
          icon={time}
          arrow={arrow}
        />
      </div>
      <div className="button-end">
        <SmallButton
        type="saveBlack"
        label="Save"
        onClick={() => {
          navigate("/shop/profile");
        }}
        />
        </div>
    </div>
  // 
  );
};

export default ScheduleWork;
