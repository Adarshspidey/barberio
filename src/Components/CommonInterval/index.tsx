import React from "react";
import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import addplus from "../../assets/Icons/add-plus.svg";
import { useNavigate } from "react-router-dom";
import IntervalListCard from "../IntervalListCard";

interface PropsTypes {
  onClickList?: () => void;
  onClickButton?: () => void;
}

const CommonInterval = ({ onClickList, onClickButton }: PropsTypes) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="button-end-margin-top">
        <ButtonWithIcon
          type="white"
          label="Set By service"
          onClick={onClickButton}
        />
      </div>
      <div className="sub-content-header">Common Interval</div>
      <div className="button-end-with-padding">
        <ButtonWithIcon
          rightIcon={addplus}
          type="white"
          label="Add"
          onClick={onClickList}
          // onClick={() => {
          //   navigate("/setup/interval-form");
          // }}
        />
      </div>
      <div onClick={onClickList}>
        <IntervalListCard />
        <IntervalListCard />
      </div>
    </div>
  );
};

export default CommonInterval;
