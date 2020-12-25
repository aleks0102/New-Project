import * as React from "react";
import * as ReactDOM from "react-dom";
import "./post-modal.css";
import Components from "../components";
import { updatePost, catchError } from "../../service/requests";
import postModel from "../../models/postModel";

interface PostModalProps {
  setPosts: Function;
  post: postModel;
  closeWindow: Function;
  token: string;
  setResponseMessage: Function;
  toggleResponseShow:Function;
  showEndSession:Function;

}

const PostModal: React.FC<PostModalProps> = ({
  setPosts,
  post,
  closeWindow,
  setResponseMessage,
  showEndSession,
  toggleResponseShow
}) => {
  const [newPost, getnewPost] = React.useState(post);

  const changePost = () => {
    updatePost(newPost)
      .then(() => setPosts())
      .catch((err) => {
        if (err.response.status == 401) {
          showEndSession(true);
        }
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
        toggleResponseShow(true);
      });
  };

  return (
    <Components.ModalWindow closeWindow={closeWindow}>
      <h2> {post.title}</h2>
      <Components.Input
        onChange={(p: string) => getnewPost({ ...newPost, title: p })}
        value={newPost.title}
        type="text"
        text=" "
      />
      <p>{post.content}</p>
      <Components.TextArea
        type="text"
        text=""
        onChange={(p: string) => getnewPost({ ...newPost, content: p })}
        value={newPost.content}
      />
      <Components.Button text={"Change"} onClick={() => changePost()} />
    </Components.ModalWindow>
  );
};

export default PostModal;
