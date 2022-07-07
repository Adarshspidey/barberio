import QRCode from '../../../assets/Icons/QRCode.svg'
import WhatsAppIcon from '../../../assets/Icons/WhatsAppIcon.svg'
import TelegramIcon from '../../../assets/Icons/TelegramIcon.svg'
import InstagramIcon from '../../../assets/Icons/InstagramIcon.svg'
import FacebookIcon from '../../../assets/Icons/FacebookIcon.svg'
import linkIcon from '../../../assets/Icons/linkIcon.svg'
import CopyIcon from '../../../assets/Icons/CopyIcon.svg'
import InputField from '../../../Components/Input'



const QrShare = () => {
  return (
    <div>
        <div className='qr-container'>
            <div className='qr-icon'><img src={QRCode} alt="QR"/></div>
            <div className='socialmedia-icon-contaier'>
                <div><img src={InstagramIcon} alt="InstagramIcon"/></div>
                <div><img src={WhatsAppIcon} alt="WhatsAppIcon"/></div>
                <div><img src={TelegramIcon} alt="TelegramIcon"/></div>
                <div><img src={FacebookIcon} alt="FacebookIcon"/></div>
            </div>
            <div className="form-container-block">
            <InputField
            label="https://sample"
            icon={linkIcon}
            arrow={CopyIcon}
            onChange={() => {}}
        />
        </div>
        </div>
    </div>
  )
}

export default QrShare