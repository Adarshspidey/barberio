import BigButton from "../Buttons/BigButton"
import arrowdown from "../../assets/Icons/arrow-down.svg"

const PopUpForm = () => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-title">Really Want to cancel..?</div>
        <div className="popup-input"><input/></div>
        <div className="popup-input"><textarea/></div>
        <div className="popup-input"><input/></div>
        <div className="popup-button">
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