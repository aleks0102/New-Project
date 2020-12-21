import * as React from "react";
import "./addpost.module.css";
import Components from "../../../components/components";
import { createPost } from "../../../service/requests";
import { Redirect } from "react-router-dom";

type AddPostProps = {
  isAuthorized: boolean;
  logIn: Function;
};

const AddPost = ({ isAuthorized, logIn }: AddPostProps) => {
  const [newPost, setNewPost] = React.useState({ title: "", content: "" });
  const [showEndSessionWindow, toggleEndSessionWindow] = React.useState(false);
  const [showMessage, toggleResponseShow] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");
  if (!isAuthorized) return <Redirect to="/login" />;

  const savePost = () => {
    createPost(newPost)
      .then((response) => setResponseMessage(response.data.message))
      .catch((err: any) => {
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
      });
      toggleResponseShow(true);

    setNewPost({ ...newPost, title: "", content: "" });
  };

  return (
    <div className="myposts">
      {showMessage && (
        <Components.ResponseMessage
          text={responseMessage}
          closeWindow={() => toggleResponseShow(false)}
        />
      )}
      {showEndSessionWindow && (
        <Components.EndSessionModal
          reload={true}
          logIn={(value: boolean) => logIn(value)}
          showEndSession={(value: boolean) => toggleEndSessionWindow(value)}
        />
      )}
      <h1>Add post</h1>
      <Components.Input
        onChange={(p: any) => {
          setNewPost({ ...newPost, title: p });
        }}
        text={"Post Title"}
        value={newPost.title}
        type="text"
      />

      <Components.TextArea
        onChange={(p: any) => setNewPost({ ...newPost, content: p })}
        text={"Content"}
        maxLength="200"
        value={newPost.content}
        required
      />
      <Components.Button onClick={savePost} text={"Add"} />
    </div>
  );
};


export default AddPost;
