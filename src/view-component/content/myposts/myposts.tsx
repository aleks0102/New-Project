import * as React from "react";
import "./mypost.css";
import Components from "../../../components/components";
import { Redirect } from "react-router-dom";
import { loadPosts } from "../../../service/requests";
import PostElement from "./post-element";

type ProfileProps = {
  isAuthorized: boolean;
  logIn: Function;
};

const MyPosts: React.FC<ProfileProps> = ({ isAuthorized, logIn }) => {
  const [myPosts, setPosts] = React.useState([]);

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    loadPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          toggleEndSessionWindow(true);
        }
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
      <h2>Publications</h2>
      <div className={"postList"}>
        {myPosts.map((post) => (
          <PostElement
            post={post}
            key={post.id}
            setPosts={getPosts}
            editable={true}
            showEndSession={(value: boolean) => toggleEndSessionWindow(value)}
            setResponseMessage={(value: string) => setResponseMessage(value)}
            toggleResponseShow={(value: boolean) => toggleResponseShow(value)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
