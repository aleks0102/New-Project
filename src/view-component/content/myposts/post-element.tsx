import * as React from "react";
import "./mypost.css";
import Components from "../../../components/components";
import { deletePost, publishPost, catchError } from "../../../service/requests";
import * as moment from "moment";

const PostElement = (props: any) => {
  const [modal, toggleModal] = React.useState(false);
  const post = props.post;

  const onDelete = () => {
    deletePost(props.post)
      .then((response) => {
        props.setPosts();
        props.setResponseMessage(true, response.data.message);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession, true);
      });
  };

  const onPublish = () => {
    publishPost(props.post)
      .then((response) => {
        props.setPosts();
        props.setResponseMessage(true, response.data.message);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession, true);
      });
  };

  return (
    <div className={"postsGrid"}>
      <div className={"postItem"}>
        <h4 onClick={() => toggleModal(true)}>{post.title}</h4>
        <p onClick={() => toggleModal(true)}>{post.content}</p>
        {props.editable && modal && (
          <div>
            <Components.PostModal
              setPosts={props.setPosts}
              post={post}
              onClick={() => toggleModal(false)}
              token={props.token}
              setResponseMessage={props.setResponseMessage}
              endSession={props.endSession}
            />
          </div>
        )}
        <span>
          {moment(post.createdDate || post.publishedDate).format(
            "hh:mm,  DD/MM/YYYY"
          )}
        </span>
      </div>
      <div className={"postControls"}>
        {props.editable && (
          <Components.SmallButton text="Delete" onClick={onDelete} />
        )}
        {props.editable && !post.isPublished && (
          <Components.SmallButton text="Publish" onClick={onPublish} />
        )}
      </div>
    </div>
  );
};

export default PostElement;
