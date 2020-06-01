import React, { useState } from "react";
import { connect } from "react-redux";
import "./mypost.module.css";
import Components from "../../../../components/components";

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
                id={post.id}
                title={post.title}
                body={post.body}
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
