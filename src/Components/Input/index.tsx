import { useEffect, useState } from "react";
import IconAndInfo from "../Input/Components/IconAndInfo";
import Label from "../Input/Components/Label";
import Layout from "../Input/Components/Layout";
import ArrowIcon from "./Components/ArrowIcon";

type PropsTypes = {
  type?: "text" | "number" | "password" | "submit" | "button" | "textarea";
  arrow?: string;
  leftIcon?:string;
  label?: string;
  icon?: string;
  error?: string;
  info?: string;
  value?: string;
  disabled?: boolean;
  onChange: (value: string, e: any) => void;
  submitted?: boolean;
};

const InputField = ({
  type = "text",
  label,
  arrow,
  leftIcon,
  icon,
  error,
  info,
  value,
  onChange,
  disabled = false,
  submitted = false,
}: PropsTypes) => {
  const [isBlurred, setIsBlurred] = useState<boolean>(false);

  useEffect(() => {
    setIsBlurred(submitted);
  }, [submitted]);

  const onBlur = () => {
    setIsBlurred(true);
  };

  return (
    <Layout error={error} isBlurred={isBlurred} type={type}>
      {type === "textarea" ? (
        <textarea
          title={label}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
          onBlur={onBlur}
        />

      ) : (
        <input
          type={type}
          title={label}
          value={value}
          onChange={(e) => onChange(e.target.value, e)}
          disabled={disabled}
          onBlur={onBlur}
        />
      )}
      <Label label={label} type={type} value={value} />
      <IconAndInfo icon={icon} info={info} />
      <ArrowIcon arrow={arrow} isLine={true} leftIcon={leftIcon}/>
    </Layout>
  );
};

export default InputField;
