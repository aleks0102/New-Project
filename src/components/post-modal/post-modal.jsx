import React, { useState } from "react";
import ReactDOM from "react-dom";
import style from "./post-modal.module.css";
import { connect } from "react-redux";
import { changeText } from "../../actions/post-actions";
import Components from "../components";
import Axios from "axios";

const PostModal = (props) => {
  let modalPost = document.querySelector(".app-wraper");
  let post = props.post;
  let [newPost, getnewPost] = useState(post);

  let authorization = {
    headers: {
      Authorization: "Bearer " + props.token,
    },
  };

  let changePost = () => {
    Axios.post(
      "https://localhost:44373/api/post/update",
      newPost,
      authorization
    ).then(() => props.getMyPosts());
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
          onSubmit={() => changePost(newPost.id)}
        />
      </div>
    </div>,
    modalPost
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};


export default connect(mapStateToProps)(PostModal);
