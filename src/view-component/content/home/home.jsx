import React from "react";
import style from "./home.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";

const Home = (props) => {
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
            <Components.PostElement post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.postsData.posts,
    messages: state.messagesPage.messages,
  };
};

export default connect(mapStateToProps)(Home);
