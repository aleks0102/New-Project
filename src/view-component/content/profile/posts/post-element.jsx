import React from "react";
import { connect } from "react-redux";
import "./post-element-module.css";
import { ShowAC, changeBody } from "../../../../actions/post-actions";
import SmallButton from "../../../../components/small-button/small-button";

const PostElement = (props) => {
  const post = props.post;
  let newBodyText = React.createRef();

  let Show = (id) => {
    props.Show(id);
  };

  let changeBody = (id) => {
    let body = newBodyText.current.value;
    props.changeBody(id, body);
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <div>
        <div>
          {post.isShowed ? (
            <div>
              <input type="text" ref={newBodyText} />
              <SmallButton onClick={() => changeBody(post.id)} text={"Save"} />
            </div>
          ) : (
            <div>
              <p onClick={() => Show(post.id)}>{post.body}</p>
            </div>
          )}
        </div>
        <span>{post.date}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeBody: (id, body) => dispatch(changeBody(id, body)),
    Show: (id) => dispatch(ShowAC(id)),
  };
};

export default connect(null, mapDispatchToProps)(PostElement);
