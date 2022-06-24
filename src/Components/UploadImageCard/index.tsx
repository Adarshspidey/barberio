import React from 'react'
import ButtonWithIcon from '../Buttons/ButtonWithIcon';
import upload from "../../assets/Icons/upload-icon-white.svg";
import Delete from "../../assets/Icons/Delete.svg"

interface PropsTypes {
    title?:string;

    onClick?: () => void;
  }
  
const UploadImageCard = ({title}:PropsTypes) => {
  return (
    <div className="notification-card" >
       <div className="image-button-title">{title}</div>
       <div>
       <div><ButtonWithIcon label="Upload" type="green" leftIcon={upload} /></div>
       <div><ButtonWithIcon label="Delete" type="black" leftIcon={Delete} /></div>
       </div>
    </div>
  )
}

export default UploadImageCard