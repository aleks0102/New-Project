import React, { useState } from "react";
import style from "./mypost.module.css";
import Components from "../../../components/components";
import Axios from "axios";

const PostElement = (props) => {
  let [isShowed, toggleShow] = useState(false);
  const post = props.post;

  let deletePost = () => {
    Axios.post(
      "https://localhost:44373/api/post/delete",
      post,
      props.authorization
    ).then(() => props.getMyPosts());
  };

  let publishPost = () => {
    Axios.post(
      "https://localhost:44373/api/post/publish",
      post,
      props.authorization
    ).then(() => props.getMyPosts());
  };

  return (
    <div>
      <h2 onClick={() => toggleShow((isShowed = true))}>{post.title}</h2>
      <div>
        <div>
          <p onClick={() => toggleShow((isShowed = true))}>{post.content}</p>
          {isShowed ? (
            <div>
              <Components.PostModal
                getMyPosts={props.getMyPosts}
                post={post}
                onClick={() => toggleShow((isShowed = false))}
              />
            </div>
          ) : null}
        </div>
        <span>{post.publishedDate}</span>
        {props.isPostForAll ? null : (
          <div className={style.splitedButtons}>
            {post.isPublished ? null : (
              <Components.SmallButton text="Publish" onClick={publishPost} />
            )}
            <Components.SmallButton text="Delete" onClick={deletePost} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PostElement;
