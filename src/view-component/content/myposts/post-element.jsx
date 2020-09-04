import React, { useState } from "react";
import style from "./mypost.module.css";
import Components from "../../../components/components";
import { deletePost, publishPost, catchError } from "../../../service/requests";

const PostElement = (props) => {
  const [modal, toggleModal] = useState(false);
  const post = props.post;

  const onDelete = () => {
    deletePost(props.post, props.token)
      .then((response) => {
        props.setPosts();
        props.setResponseMessage(true, response.data.message);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
  };

  const onPublish = () => {
    publishPost(props.post, props.token)
      .then((response) => {
        props.setPosts();
        props.setResponseMessage(true, response.data.message);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
  };

  return (
    <div>
      <h2 onClick={() => toggleModal(true)}>{post.title}</h2>
      <div>
        <div>
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
        </div>
        <span>{post.publishedDate}</span>
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
