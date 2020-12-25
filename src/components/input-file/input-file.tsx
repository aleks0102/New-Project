import * as React from "react";

interface InputFilesProps {
  loadPhoto: Function;
  setResponseMessage: Function;
}

export const InputFiles: React.FC<InputFilesProps> = ({
  loadPhoto,
  setResponseMessage,
}) => {
  const onChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file != null && file.size < 300000) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const avatar = reader.result;
        loadPhoto(avatar);
      };
    } else setResponseMessage("Image is not selected or very big");
  };

  return <input type="file" onChange={onChange} />;
};
