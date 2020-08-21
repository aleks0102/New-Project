import React, { useEffect } from "react";
import style from "./home.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import Axios from "axios";
import { setAllPosts } from "../../../actions/post-actions";

const Home = (props) => {
  useEffect(() => {
    setAllPosts();
  }, []);

  let setAllPosts = () => {
    Axios.get("https://localhost:44373/api/post/getall").then((response) =>
      props.setAllPosts(response.data)
    );
  };

  return (
    <div className={style.homepage}>
      <div className={style.side}>
        <h3>Last messages</h3>
        {props.messages.map((message) => (
          <div key={message.id}>
            <Components.MessageElement message={message} />
          </div>
        ))}
      </div>

      <div className={style.main}>
        <h3>Last posts</h3>
        {props.posts.map((post) => (
          <div key={post.id}>
            <Components.PostElement post={post} isPostForAll={true} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.allPosts,
    messages: state.messages.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAllPosts: (posts) => dispatch(setAllPosts(posts)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
