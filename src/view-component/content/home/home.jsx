import React from "react";
import style from "./home.module.css";
import { connect } from "react-redux";
import { setAllPosts } from "../../../actions/post-actions";
import { loadAllPosts, catchError } from "../../../service/requests";
import { setResponseMessage } from "../../../actions/users-actions";
import PostElement from "../myposts/post-element";

const Home = (props) => {
  React.useEffect(() => {
    loadAllPosts()
      .then((response) => props.setAllPosts(response.data))
      .catch((err) => {
        catchError(err, props.setResponseMessage);
      });
  }, []);

  return (
    <div className={style.homepage}>
      <div className={style.side}>
        <h2>Last messages</h2>
        <p>There will be messages soon</p>
      </div>

      <div className={style.main}>
        <h2>Last posts</h2>
        {props.posts.map((post) => (
          <PostElement post={post} editable={false} key={post.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.allPosts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAllPosts: (posts) => dispatch(setAllPosts(posts)),
    setResponseMessage: (value, data) =>
      dispatch(setResponseMessage(value, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
