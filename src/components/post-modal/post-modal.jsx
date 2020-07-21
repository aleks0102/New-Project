import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./post-modal.module.css";
import { connect } from "react-redux";
import { changeText } from "../../actions/post-actions";
import Components from "../components";

const PostModal = (props) => {
  let modalPost = document.querySelector(".app-wraper");
  let post = props.post;
  let [newPost, getnewPost] = useState(post);

  let changeText = (id) => {
    props.changeText(id, newPost);
  };

  return ReactDOM.createPortal(
    <div className={style.modalBg} onClick={props.onClick}>
      <div className={style.modalWin} onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <h2> {props.title}</h2>
        <Components.TextArea
          onChange={(p) => getnewPost({ ...newPost, title: p })}
          value={newPost.title}
        />
        <p>{props.body}</p>
        <Components.TextArea
          onChange={(p) => getnewPost({ ...newPost, body: p })}
          value={newPost.body}
        />
        <Components.Button
          text={"Change"}
          onSubmit={() => changeText(newPost.id)}
        />
      </div>
    </div>,
    modalPost
  );
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeText: (id, newPost) => dispatch(changeText(id, newPost)),
  };
};

export default connect(null, mapDispatchToProps)(PostModal);
