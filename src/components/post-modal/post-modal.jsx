import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import style from "./post-modal.module.css";
import { connect } from "react-redux";
import { changeText } from "../../actions/post-actions";
import Components from "../components";

const PostModal = (props) => {
  let modalPost = document.querySelector(".app-wraper");

  let [newTitle, getTitle] = useState();
  let [newBody, getBody] = useState();

  let changeText = (id) => {
    if (newTitle != props.title) {
      props.changeText(id, newTitle, newBody);
    }
  };

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <span className={style.close} onClick={props.onClick}>
          X
        </span>
        <h2> {props.title}</h2>
        <Components.MainTextArea
          onChange={(e) => getTitle((newTitle = e.target.value))}
          defaultValue={props.title}
        />
        <p>{props.body}</p>
        <Components.MainTextArea
          onChange={(e) => getBody((newBody = e.target.value))}
          defaultValue={props.body}
        />
        <Components.MainButton
          text={"Change"}
          onSubmit={() => changeText(props.id)}
        />
      </div>
    </div>,
    modalPost
  );
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeText: (id, title, body) => dispatch(changeText(id, title, body)),
  };
};

export default connect(null, mapDispatchToProps)(PostModal);
