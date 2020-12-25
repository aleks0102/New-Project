import * as React from "react";
import "./input.css";

interface InputProps {
  onChange: Function;
  text: string;
  type: string;
  value: string | number | readonly string[] | undefined;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  onChange,
  text,
  type,
  value,
  required,
}) => {
  return (
    <div>
      {text && <label>{text}</label>}
      <input
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        className={!value && required ? "validate" : "not_validate"}
      />
    </div>
  );
};

export default Input;
