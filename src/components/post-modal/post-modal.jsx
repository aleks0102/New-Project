import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./post-modal.module.css";
import Components from "../components";
import { updatePost, catchError } from "../../service/requests";

const PostModal = (props) => {
  const modalPost = document.querySelector(".app-wraper");
  const [newPost, getnewPost] = useState(props.post);

  const changePost = () => {
    updatePost(newPost, props.token)
      .then(() => props.setPosts())
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
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
          onChange={(p) => getnewPost({ ...newPost, content: p })}
          value={newPost.content}
        />
        <Components.Button
          text={"Change"}
          onClick={() => changePost(newPost.id)}
        />
      </div>
    </div>,
    modalPost
  );
};

export default PostModal;
