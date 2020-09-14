import React from "react";
import style from "./addpost.module.css";
import Components from "../../../components/components";
import { createPost, catchError } from "../../../service/requests";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setResponseMessage, endSession } from "../../../actions/users-actions";

const AddPost = (props) => {
  const [newPost, setNewPost] = React.useState({ title: "", content: "" });

  if (!props.isAuthorized) return <Redirect to="/login" />;

  const savePost = () => {
    createPost(newPost)
      .then((response) => props.setResponseMessage(true, "Post was saved"))
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
    setNewPost({ ...newPost, title: "", content: "" });
  };

  return (
    <div className={style.myposts}>
      <h1>Add post</h1>
      <Components.Input
        onChange={(p) => {
          setNewPost({ ...newPost, title: p });
        }}
        text={"Post Title"}
        maxLength="50"
        value={newPost.title}
        required
      />

      <Components.TextArea
        onChange={(p) => setNewPost({ ...newPost, content: p })}
        text={"Content"}
        maxLength="200"
        value={newPost.content}
        required
      />
      <Components.Button onClick={savePost} text={"Add"} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.users.isAuthorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    endSession: (value) => dispatch(endSession(value)),
    setResponseMessage: (value, text) =>
      dispatch(setResponseMessage(value, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
