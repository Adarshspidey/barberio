import styles from "../../styles/Register.module.css";

type PropsTypes = {
    placeholder: string;
    value: string;
    option: string;
    onChange: (value:string) => void;
}


const CheckBox = ({placeholder,option,value,onChange}:PropsTypes) => {
  return (
    <div className={styles.CheckLabelWrapper}
        onClick={() => {
            if(value !== option){
                onChange(option)
            }else{
                onChange("")
            }
        }}>
        <input
            className={styles.checkbox}
            placeholder={placeholder}
            type="checkbox"
            value={option}
            checked={
                value === option
            }
            onChange={() => {}}
        />
        <label className={styles.checkLabel}>{placeholder}</label>
    </div>
  )
}

export default CheckBox