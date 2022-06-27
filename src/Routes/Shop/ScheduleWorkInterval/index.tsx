import { Dispatch, SetStateAction, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import profileActive from "../../../assets/Icons/Profile-active.svg";
import BackButton from "../../../Components/Buttons/BackButton";
import BigButton from "../../../Components/Buttons/BigButton";
import ButtonWithIcon from "../../../Components/Buttons/ButtonWithIcon";
import IntervalListCard from "../../../Components/IntervalListCard";
import addplus from "../../../assets/Icons/add-plus.svg";
import SmallButton from "../../../Components/Buttons/SmallButton";
import CommonInterval from "../../../Components/CommonInterval";

const ScheduleWorkInterval = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <div className="wrapper-flex-justify-content">
      <div className="edit-profile-title"> Select Service</div>
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
      <div className="button-end">
        <SmallButton
        type="saveBlack"
        label="Save"
        onClick={() => {
          navigate("/shop/profile");
        }}
        />
        </div> */}
      <CommonInterval />
    </div>
  );
};

export default ScheduleWorkInterval;
