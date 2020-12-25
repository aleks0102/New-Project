import * as React from "react";
import "./home.css";
import { loadAllPosts } from "../../../service/requests";
import PostElement from "../myposts/post-element";
import Components from "../../../components/components";

const Home: React.FC<{}> = () => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    loadAllPosts()
      .then((response) => setPosts(response.data))
      .catch((err) => {
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
        toggleShow(true);
      });
  }, []);

  const [responseMessage, setResponseMessage] = React.useState("");
  const [showMessage, toggleShow] = React.useState(false);

  return (
    <div className="main">
      {showMessage && (
        <Components.ResponseMessage
          text={responseMessage}
          closeWindow={() => toggleShow(false)}
        />
      )}
      <h2>Last posts</h2>
      {posts.map((post) => (
        <PostElement
          post={post}
          editable={false}
          setPosts={() => {}}
          setResponseMessage={() => {}}
        />
      ))}
    </div>
  );
};

export default Home;
