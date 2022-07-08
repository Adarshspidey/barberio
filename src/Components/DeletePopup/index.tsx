import ButtonWithIcon from "../Buttons/ButtonWithIcon";
import upload from '../../assets/Icons/upload.svg';
import deleteIcon from '../../assets/Icons/delete-icon-white.svg';

const DeletePopup = () => {
  return (
    <div className="delete-popup-component">
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
      <div>
      </div>
    </div>
  )
}

export default DeletePopup