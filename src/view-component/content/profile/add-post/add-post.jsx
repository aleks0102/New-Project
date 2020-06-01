import React, { useState } from "react";
import style from "../profile.module.css";
import { connect } from "react-redux";
import { addPost } from "../../../../actions/post-actions";
import Components from "../../../../components/components";

const AddPost = (props) => {
  let [title, getTitle] = useState();
  let [body, getBody] = useState();

  let addPost = () => {
    props.addPost(title, body);
    getTitle((title = " "));
    getBody((body = " "));
  };

  return (
    <div className={style.myposts}>
      <h2>Add post</h2>
      <Components.MainTextArea
        onChange={(e) => getTitle((title = e.target.value))}
        text={"Post Title"}
        maxLength="50"
        value={title}
      />
      <Components.MainTextArea
        onChange={(e) => getBody((body = e.target.value))}
        text={"Post Body"}
        maxLength="200"
        value={body}
      />
      <Components.MainButton onSubmit={addPost} text={"Add"} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title, body) => dispatch(addPost(title, body)),
  };
};

export default connect(null, mapDispatchToProps)(AddPost);
