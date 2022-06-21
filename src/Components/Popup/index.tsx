import React, { Dispatch, SetStateAction } from "react";
import BigButton from "../Buttons/BigButton";
import PopUpDiscardButton from "../Buttons/PopUpDiscardButton";
import InputField from "../Input";

interface PropsTypes {
  setPopupState: Dispatch<SetStateAction<boolean>>;
}

const Popup = ({ setPopupState }: PropsTypes) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">Really Want to cancel..?</div>
        <div className="popup-body">
          <InputField label="Other" onChange={() => {}} value="" />
          <InputField label="Subject" onChange={() => {}} value="" />
          <InputField
            type="textarea"
            label="Reason"
            onChange={() => {}}
            value=""
          />
          <div className="popup-button-wrapper">
            <PopUpDiscardButton
              label="Discard"
              onClick={() => {
                setPopupState(false);
              }}
            />
            <BigButton
              type="primary"
              label="Submit"
              onClick={() => {
                setPopupState(false);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
