import React, { Dispatch, SetStateAction } from "react";
import BigButton from "../Buttons/BigButton";
import PopUpDiscardButton from "../Buttons/PopUpDiscardButton";
import InputField from "../Input";

interface PropsTypes {
  setPopupState: Dispatch<SetStateAction<boolean>>;
  buttonLabel: string;
  isCancel?: boolean;
}

const Popup = ({
  setPopupState,
  buttonLabel,
  isCancel = false,
}: PropsTypes) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">Really Want to cancel..?</div>
        {isCancel && (
          <div className="popup-body">
            <InputField label="Other" onChange={() => {}} value="" />
            <InputField label="Subject" onChange={() => {}} value="" />
            <InputField
              type="textarea"
              label="Reason"
              onChange={() => {}}
              value=""
            />
          </div>
        )}
        <div className="popup-button-wrapper">
          <PopUpDiscardButton
            label="Discard"
            onClick={() => {
              setPopupState(false);
            }}
          />
          <BigButton
            type="primary"
            label={buttonLabel}
            onClick={() => {
              setPopupState(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
