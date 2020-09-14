import React from "react";
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
  React.useEffect(() => {
    setPosts();
  }, []);

  const setPosts = () => {
    loadPosts()
      .then((response) => {
        props.setMyPosts(response.data);
      })
      .catch((err) => {
        catchError(err, true);
      });
  };

  if (!props.isAuthorized) return <Redirect to="/login" />;

  return (
    <div className={style.myposts}>
      <div className={style.sortPosts}>
        <Components.SmallButton
          onClick={() =>
            sortPosts(props.myPosts, props.sort, props.firstPostId)
          }
          text="Sort"
        />
      </div>
      <h2>Publications</h2>
      <div className={style.postList}>
        {props.myPosts.map((post) => (
          <PostElement
            post={post}
            key={post.id}
            setPosts={setPosts}
            editable={true}
            endSession={props.endSession}
            setResponseMessage={props.setResponseMessage}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myPosts: state.posts.myPosts,
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
