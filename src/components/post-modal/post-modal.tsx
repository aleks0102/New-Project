import * as React from 'react'
import * as ReactDOM from 'react-dom'
import   "./post-modal.css";
import Components from "../components";
import { updatePost, catchError } from "../../service/requests";

const PostModal = (props:any) => {
  const modalPost:any = document.querySelector(".app-wraper");
  const [newPost, getnewPost] = React.useState(props.post);

  // const changePost = () => {
  //   updatePost(newPost, props.token)
  //     .then(() => props.setPosts())
  //     .catch((err) => {
  //       catchError(err, props.setResponseMessage, props.endSession);
  //     });
  // };

  return ReactDOM.createPortal(
    <div className='modalBg' onClick={props.onClick}>
      <div className='modalWin' onClick={(e) => e.stopPropagation()}>
        <Components.Close onClick={props.onClick} />
        <h2> {props.title}</h2>
        <Components.Input
          onChange={(p:any) => getnewPost({ ...newPost, title: p })}
          value={newPost.title}
          type="text"
          text=" "
        />
        <p>{props.body}</p>
        <Components.TextArea
          onChange={(p :any) => getnewPost({ ...newPost, content: p })}
          value={newPost.content}
        />
        <Components.Button
          text={"Change"}
          //onClick={() => changePost(newPost.id)}
        />
      </div>
    </div>,
    modalPost
  );
};

export default PostModal;
