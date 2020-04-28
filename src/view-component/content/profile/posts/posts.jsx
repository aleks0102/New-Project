import React from "react";
import style from "../profile.module.css";
import MainButton from "../../../../components/main-button/main-button";
import PostElement from "./post-element";
import MainTextArea from "../../../../components/main-textarea/textarea";
import { connect } from "react-redux";
import { addPostAC } from "../../../../actions/post-actions";

const Posts = (props) => {
  let posts = props.posts;
  let newPostElementTitle = React.createRef();
  let newPostElementBody = React.createRef();

  let addPost = () => {
    let title = newPostElementTitle.current.value;
    let body = newPostElementBody.current.value;
    props.addPost(title, body);
  };

  return (
    <div className={style.myposts}>
      <h2>Publications</h2>
      <p>Add post</p>
      <MainTextArea refs={newPostElementTitle} text={"Post Title"} maxLength="50" />
      <MainTextArea refs={newPostElementBody} text={"Post Body"} maxLength="200" />
      <MainButton onSubmit={addPost} text={"Add"} />

      <div>
        {posts.map((post) => (
          <div key={post.date}>
            <PostElement post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (title, body) => dispatch(addPostAC(title, body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
