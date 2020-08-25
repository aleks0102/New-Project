import React, { useEffect } from "react";
import style from "./mypost.module.css";
import { connect } from "react-redux";
import Components from "../../../components/components";
import SmallButton from "../../../components/small-button/small-button";
import { sortByDate, setMyPosts } from "../../../actions/post-actions";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { logOut, endSession } from "../../../actions/users-actions";

const MyPosts = (props) => {
  useEffect(() => {
    getMyPosts();
  }, []);

  let authorization = {
    headers: {
      Authorization: "Bearer " + props.token,
    },
  };

  let getMyPosts = () => {
    Axios.get("https://localhost:44373/api/post/getmyposts", authorization)
      .then((response) => {
        props.setMyPosts((posts = response.data));
      })
      .catch((err) => {
        if (err.response.status == 401) {
          props.endSession(true);
        }
        console.log(err);
      });
  };

  let posts = props.myPosts;

  const sortByDate = () => {
    let newPosts = posts.map((p) => p);
    newPosts.sort((a, b) =>
      (newPosts[0].id == props.idOfFirstPost ? a.id < b.id : a.id > b.id)
        ? 1
        : -1
    );
    props.sortByDate(newPosts);
  };

  if (props.isAutorized) {
    return (
      <div className={style.myposts}>
        <Components.AddPost
          authorization={authorization}
          getMyPosts={getMyPosts}
        />
        <SmallButton onClick={sortByDate} text="Sort" />
        <h2 onClick={() => props.endSession(true)}>Publications</h2>
        {posts.map((post) => (
          <div key={post.id}>
            <Components.PostElement
              post={post}
              getMyPosts={getMyPosts}
              authorization={authorization}
            />
          </div>
        ))}
      </div>
    );
  } else return <Redirect to="/login" />;
};

const mapStateToProps = (state) => {
  return {
    myPosts: state.posts.myPosts,
    token: state.users.token,
    isAutorized: state.users.isAutorized,
    idOfFirstPost: state.posts.idOfFirstPost,
    showConfirmMessage: state.users.showEndSessionMessage,
    username: state.users.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setMyPosts: (posts) => dispatch(setMyPosts(posts)),
    sortByDate: (posts) => dispatch(sortByDate(posts)),
    logOut: () => dispatch(logOut()),
    endSession: (value) => dispatch(endSession(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
