import React from 'react'
import ButtonWithIcon from '../Buttons/ButtonWithIcon'
import addplus from "../../assets/Icons/add-plus.svg";
import { useNavigate } from 'react-router-dom';
import IntervalListCard from '../IntervalListCard';

const CommenInterval = () => {
    const navigate = useNavigate();

  return (
    <div>
        <div className="button-end">
        <ButtonWithIcon
          type="white"
          label="Set By service"
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
        <IntervalListCard />
    </div>
  )
}

export default CommenInterval