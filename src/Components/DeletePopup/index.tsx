import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import upload from '../../assets/Icons/upload.svg';
import deleteIcon from '../../assets/Icons/delete-icon-white.svg';
import { useState } from "react";

interface PropsTypes {
  IsPopUp?: boolean;
  IsGallery?:boolean;

}

const DeletePopup = ({ IsPopUp=false,IsGallery=false}:PropsTypes) => {
  return (
    <>
    {IsPopUp &&
    <div className="popup-container">
      <div className="delete-popup-container">
        <div>
          <ButtonWithIcon 
          leftIcon={upload}
          label="upload"
          type="upload"/>
        </div>
        <div>
          <ButtonWithIcon
            leftIcon={deleteIcon}
            label="Delete"
            type="black"
          />
        </div>
      </div>
      {IsGallery&&
       <div className="gallery-popup-container">
        <div>Are You Sure to Delete this image ?</div>
        <div className="radio-container"><input type="radio"/>Don’t show this message again.  </div>
        <div>
          <ButtonWithIcon
            leftIcon={deleteIcon}
            label="Delete"
            type="black"
          />
        </div>
      </div>
}
    </div>
}
    </>
  )
}

export default DeletePopup