import React from "react";

export const InputFiles = (props) => {
  const onChange = (e) => {
    const p = e.target.files[0];
    props.onChange(p);
  };

  return <input type="file" onChange={onChange} />;
};
