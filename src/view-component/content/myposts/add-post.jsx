import React, { useState } from "react";
import style from "./mypost.module.css";
import { connect } from "react-redux";
import { addPost } from "../../../actions/post-actions";
import Components from "../../../components/components";

const AddPost = (props) => {
  let [newPost, getnewPost] = useState({});
  let addPost = () => {
    props.addPost(newPost);
    getnewPost({ ...newPost, title: " ", body: " " });
  };

  return (
    <div className={style.myposts}>
      <h2>Add post</h2>
      <Components.MainTextArea
        onChange={(p) => getnewPost({ ...newPost, title: p })}
        text={"Post Title"}
        maxLength="50"
        value={newPost.title}
      />
      <Components.MainTextArea
        onChange={(p) => getnewPost({ ...newPost, body: p })}
        text={"Post Body"}
        maxLength="200"
        value={newPost.body}
      />
      <Components.MainButton onSubmit={addPost} text={"Add"} />
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
