type PropsTypes = {
  value?: string;
  onClick?: () => void;
}

const ToggleButton = ({  onClick, value }: PropsTypes) => {
  return (
    <label className="toggle-button-container">
      <input type="checkbox" 
      
      />
      <span className="slider round"></span>
    </label>
  );
};

export default ToggleButton;
