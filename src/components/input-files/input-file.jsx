import React from "react";

export const InputFiles = (props) => {
  let onChange = (e) => {
    let p = e.target.files[0];
    props.onChange(p);
  };

  return <input type="file" onChange={onChange} />;
};
