import * as React from "react";
import "./button.css";

interface ButtonProps {
  onClick: Function;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button className="but" onClick={() => onClick()}>
      {text}
    </button>
  );
};

export default Button;
