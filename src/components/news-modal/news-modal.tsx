import * as React from 'react'
import * as ReactDOM from 'react-dom'
import   "./news-modal.css";
import Components from "../components";
import { capitalizeFirstLetter } from "../../service/serviceFunctions";

export const NewsModal = (props:any) => {
  const modalNew:any = document.querySelector(".app-wraper");
  return ReactDOM.createPortal(
    <div className='modalBg' onClick={props.onClick}>
      <div className='modalWin' onClick={(e:any) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <h2> {capitalizeFirstLetter(props.title)}</h2>
        <p>{capitalizeFirstLetter(props.body)}</p>
      </div>
    </div>,
    modalNew
  );
};
