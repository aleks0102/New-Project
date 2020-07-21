import React, { useState } from "react";
import style from "./mypost.module.css";
import { connect } from "react-redux";
import { addPost } from "../../../actions/post-actions";
import Components from "../../../components/components";

const AddPost = (props) => {
  let [newPost, getnewPost] = useState({});
  let [validation, showValidation] = useState(false);
  let addPost = () => {
    if (
      newPost.title != "" &&
      newPost.title != undefined &&
      newPost.title != null
    ) {
      props.addPost(newPost);
    } else {
      showValidation((validation = true));
    }
    getnewPost({ ...newPost, title: "", body: "" });
  };

  return (
    <div className={style.myposts}>
      <h2>Add post</h2>

      <Components.TextArea
        onChange={(p) => {
          getnewPost({ ...newPost, title: p });
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
        onChange={(p) => getnewPost({ ...newPost, body: p })}
        text={"Post Body"}
        maxLength="200"
        value={newPost.body}
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
