
interface PropsTypes {
  label: string;
  onClick?: () => void;
}

const PopUpDiscardButton = ({ label, onClick }: PropsTypes) => {
  return (
    <button className="button-big-discardBlack" onClick={onClick}>
      {label}
    </button>
  );
};

export default PopUpDiscardButton;
