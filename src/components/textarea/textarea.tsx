import * as React from 'react'
import   "./textarea.css";


interface TextAreaProps {
  onChange: Function;
  text: string;
  type: string;
  value: string | number | readonly string[] | undefined;
}


const TextArea:React.FC<TextAreaProps> = ({onChange, text, type, value  }) => {
  const ValidateValue = (e:any) => {
    // validateField(e, props.required, style);
    onChange(e.target.value);
  };

  return (
    <div>
      {text && <p>{text}</p>}
      <textarea
        value={value}
        // type={props.type}
        onChange={ValidateValue}
        // onClick={(e) => validateField(e, props.required, style)}
      ></textarea>
    </div>
  );
};

export default TextArea;
