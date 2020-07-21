import React from "react";
import anon from "../../assets/Anonymous.png";

export const Ava = (props) => {
  return <img src={props.avatar ? props.avatar : anon} alt="" />;
};
