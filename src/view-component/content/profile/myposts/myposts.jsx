import React from "react";
import style from "./mypost.module.css";
import { connect } from "react-redux";
import Components from "../../../../components/components";

const MyPosts = (props) => {
  let posts = props.posts;

  return (
    <div className={style.myposts}>
      <h2>Publications</h2>
      {posts.map((post) => (
        <div key={post.date}>
          <Components.PostElement post={post} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

export default connect(mapStateToProps)(MyPosts);
