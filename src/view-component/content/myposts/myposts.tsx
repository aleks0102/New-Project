import * as React from "react";
import "./mypost.css";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";
import { loadPosts, catchError } from "../../../service/requests";
import PostElement from "./post-element";

type ProfileProps = {
  isAuthorized: boolean;
  logIn: Function;
};

const MyPosts = ({ isAuthorized, logIn }: ProfileProps) => {
  const [myPosts, setPosts] = React.useState([] as any[]);

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    loadPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
        toggleResponseShow(true);
      });
  };

  const [showEndSessionWindow, toggleEndSessionWindow] = React.useState(false);
  const [showMessage, toggleResponseShow] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState("");

  if (!isAuthorized) return <Redirect to="/login" />;

  return (
    <div className={"myposts"}>
      {showMessage && (
        <Components.ResponseMessage
          text={responseMessage}
          closeWindow={() => toggleResponseShow(false)}
        />
      )}
      {showEndSessionWindow && (
        <Components.EndSessionModal
          reload={true}
          logIn={(value: boolean) => logIn(value)}
          showEndSession={(value: boolean) => toggleEndSessionWindow(value)}
        />
      )}
      <div className={"sortPosts"}>
        <Components.SmallButton
           onClick={
           () =>
           //sortPosts(props.myPosts, props.sort, props.firstPostId)
           console.log("Work")
           }
          text="Sort"
        />
      </div>
      <h2 onClick={() => console.log(myPosts)}>Publications</h2>
      <div className={"postList"}>
        {myPosts.map((post) => (
          <PostElement
            post={post}
            key={post.id}
            setPosts={getPosts}
            editable={true}
            // endSession={props.endSession}
            // setResponseMessage={props.setResponseMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
