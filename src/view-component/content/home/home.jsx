import React from "react";
import style from "./home.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";

const Home = (props) => {
  let isAutorized = props.isAutorized;
  if (isAutorized == true) {
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
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    messages: state.dialogPage.messages,
    isAutorized: state.userData.isAutorized,
  };
};

export default connect(mapStateToProps)(Home);
