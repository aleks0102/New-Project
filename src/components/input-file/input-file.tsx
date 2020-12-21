import * as React from 'react'

export const InputFiles = (props:any) => {
  const onChange = (e:any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file != null && file.size < 300000) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const avatar = reader.result;
        props.onChange(avatar);
      };
    } else props.setResponseMessage(true, "Image is not selected or very big");
  };

  return <input type="file" onChange={onChange} />;
};
