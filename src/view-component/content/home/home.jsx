import React from "react";
import style from "./home.module.css";
import MessageElement from "../messages/messages.element";
import PostElement from "../profile/posts/post-element";
import { connect } from "react-redux";

const Home = (props) => {
  return (
    <div className={style.homepage}>
      <div className={style.side}>
        <h3>Last messages</h3>
        {props.messages.map((message) => (
          <div key={message.id}>
            <MessageElement message={message} />
          </div>
        ))}
      </div>

      <div className={style.main}>
        <h3>Last posts</h3>
        <div>
          {props.posts.map((post) => (
            <div key={post.id}>
              <PostElement post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    messages: state.dialogPage.messages,
  };
};

export default connect(mapStateToProps)(Home);
