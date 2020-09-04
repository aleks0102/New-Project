import React, { useEffect } from "react";
import style from "./mypost.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import { sort, setMyPosts } from "../../../actions/post-actions";
import { Redirect } from "react-router-dom";
import {
  logOut,
  endSession,
  setResponseMessage,
} from "../../../actions/users-actions";
import { loadPosts, catchError } from "../../../service/requests";
import PostElement from "./post-element";
import { sortPosts } from "../../../service/serviceFunctions";

const MyPosts = (props) => {
  useEffect(() => {
    setPosts();
  }, []);

  const setPosts = () => {
    loadPosts(props.token)
      .then((response) => {
        props.setMyPosts(response.data);
      })
      .catch((err) => {
        catchError(err, props.setResponseMessage, props.endSession);
      });
  };

  if (!props.isAuthorized) return <Redirect to="/login" />;

  return (
    <div className={style.myposts}>
      <Components.AddPost
        token={props.token}
        setPosts={setPosts}
        setResponseMessage={props.setResponseMessage}
        endSession={props.endSession}
      />
      <Components.SmallButton
        onClick={() => sortPosts(props.myPosts, props.sort, props.firstPostId)}
        text="Sort"
      />
      <h2>Publications</h2>
      {props.myPosts.map((post) => (
        <PostElement
          post={post}
          key={post.id}
          token={props.token}
          setPosts={setPosts}
          editable={true}
          endSession={props.endSession}
          setResponseMessage={props.setResponseMessage}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myPosts: state.posts.myPosts,
    token: state.users.token,
    isAuthorized: state.users.isAuthorized,
    firstPostId: state.posts.firstPostId,
    showConfirmMessage: state.users.showEndSessionMessage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMyPosts: (posts) => dispatch(setMyPosts(posts)),
    sort: (posts) => dispatch(sort(posts)),
    logOut: () => dispatch(logOut()),
    endSession: (value, reload) => dispatch(endSession(value, reload)),
    setResponseMessage: (value, text) =>
      dispatch(setResponseMessage(value, text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
