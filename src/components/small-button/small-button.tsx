import * as React from "react";
import "./small-button.css";

type SmallButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent) => void;
};

const SmallButton: React.FC<SmallButtonProps> = ({ text, onClick }) => {
  return (
    <button className="sbutt" onClick={onClick}>
      {text}
    </button>
  );
};

export default SmallButton;
