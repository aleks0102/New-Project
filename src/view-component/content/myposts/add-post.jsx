import React, { useState } from "react";
import style from "./mypost.module.css";
import { connect } from "react-redux";
import { addPost } from "../../../actions/post-actions";
import Components from "../../../components/components";
import Axios from "axios";

const AddPost = (props) => {
  let [newPost, setNewPost] = useState({});
  let [validation, showValidation] = useState(false);

  let addPost = () => {
    if (
      newPost.title != "" &&
      newPost.title != undefined &&
      newPost.title != null
    ) {
      Axios.post(
        "https://localhost:44373/api/post/create",
        newPost,
        props.authorization
      ).then(() => props.getMyPosts());
    } else {
      showValidation((validation = true));
    }
    setNewPost({ ...newPost, title: "", content: "" });
  };

  return (
    <div className={style.myposts}>
      <h2>Add post</h2>

      <Components.TextArea
        onChange={(p) => {
          setNewPost({ ...newPost, title: p });
          showValidation((validation = false));
        }}
        text={"Post Title"}
        maxLength="50"
        value={newPost.title}
      />
      {validation ? (
        <Components.Warning text="Post title cannot be empty" />
      ) : null}
      <Components.TextArea
        onChange={(p) => setNewPost({ ...newPost, content: p })}
        text={"Post Body"}
        maxLength="200"
        value={newPost.content}
      />
      <Components.Button onSubmit={addPost} text={"Add"} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => {
      dispatch(addPost(post));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddPost);
