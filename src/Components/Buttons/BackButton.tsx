import backButtonIcon from "../../assets/Icons/arrow-left.svg";

interface PropsType{
    icon?: string;
    label?:string;
    onClick?:()=>void;
}

const BackButton = ({icon=backButtonIcon,label="Back"}:PropsType) => {
  return (
    <button className="back-button">
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