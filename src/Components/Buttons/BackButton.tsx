import { useNavigate } from "react-router-dom";
import backButtonIcon from "../../assets/Icons/arrow-left.svg";

interface PropsType{
    icon?: string;
    label?:string;
    onClick?:()=>void;
}

const BackButton = ({icon=backButtonIcon,label="Back",onClick}:PropsType) => {
    const navigate = useNavigate();

  return (
    <button
        className="back-button"
        onClick={onClick || (()=>navigate(-1))}
    >
        <img
            src={icon}
            alt={label} />
        <span>
            {label}
        </span>
    </button>
  )
}

export default BackButton