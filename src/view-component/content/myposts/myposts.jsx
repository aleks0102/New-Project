import React from "react";
import style from "./mypost.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import SmallButton from "../../../components/small-button/small-button";
import { sortByDate } from "../../../actions/post-actions";

const MyPosts = (props) => {
  const sortByDate = () => {
    let newPosts = posts.map((p) => p);
    newPosts.sort((a, b) =>
      (newPosts[0].id == 1 ? a.id < b.id : a.id > b.id) ? 1 : -1
    );

    props.sortByDate(newPosts);
  };

  let posts = props.posts;

  return (
    <div className={style.myposts}>
      <Components.AddPost />
      <SmallButton onClick={() => sortByDate()} text="Sort" />
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
    posts: state.posts.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortByDate: (posts) => dispatch(sortByDate(posts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
