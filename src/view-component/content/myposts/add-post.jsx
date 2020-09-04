import React, { useState } from "react";
import style from "./mypost.module.css";
import Components from "../../../components/components";
import { createPost, catchError } from "../../../service/requests";

const AddPost = (props) => {
  const [newPost, setNewPost] = useState({ title: null });

  const addPost = () => {
    createPost(newPost, props.token)
      .then(() => props.setPosts())
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
    setNewPost({ ...newPost, title: "", content: "" });
  };

  return (
    <div className={style.myposts}>
      <h2>Add post</h2>
      <Components.TextArea
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
        text={"Post Body"}
        maxLength="200"
        value={newPost.content}
        required
      />
      <Components.Button onClick={addPost} text={"Add"} />
    </div>
  );
};

export default AddPost;
