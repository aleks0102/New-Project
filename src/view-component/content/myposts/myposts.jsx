import React from "react";
import style from "./mypost.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { savePosts } from "../../../service/setPosts";

const MyPosts = (props) => {
  let posts = props.posts;
  savePosts(posts);
  return (
    <div className={style.myposts}>
      <Components.AddPost />
      <h2>Publications</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <Components.PostElement post={post} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsData.posts,
  };
};

export default connect(mapStateToProps)(MyPosts);
