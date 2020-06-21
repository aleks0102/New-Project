import React, { useState } from "react";
import style from "./mypost.module.css";
import Components from "../../../components/components";

const PostElement = (props) => {
  let [isShowed, toggleShow] = useState(false);
  const post = props.post;

  return (
    <div>
      <h2>{post.title}</h2>
      <div>
        <div>
          <p onClick={() => toggleShow((isShowed = true))}>{post.body}</p>
          {isShowed ? (
            <div>
              <Components.PostModal
                post={post}
                onClick={() => toggleShow((isShowed = false))}
              />
            </div>
          ) : null}
        </div>
        <span>{post.date}</span>
      </div>
    </div>
  );
};

export default PostElement;
