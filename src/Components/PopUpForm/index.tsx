import BigButton from "../Buttons/BigButton"
import arrowdown from "../../assets/Icons/arrow-down.svg"

const PopUpForm = () => {
  return (
    <div className="popup-container">
      <div className="delete-popup-container">
        <div className="popup-title">Really Want to cancel..?</div>
        <div className="popup-input">
         <div className="input-field-arrow"><img src={arrowdown}/></div>
         </div>
        <div className="popup-input"></div>
        <div className="popup-input"><textarea/></div>
        <div>
          <BigButton
          type="transpernt"
          label="Discard"/>
          <BigButton
          label="submit"/>
        </div>
      </div>
    </div>
  )
}

export default PopUpForm