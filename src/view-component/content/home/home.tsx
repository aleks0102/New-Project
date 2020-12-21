import * as React from "react";
import "./home.css";
import { loadAllPosts, catchError } from "../../../service/requests";
import PostElement from "../myposts/post-element";

const Home = (props: any) => {
  const [posts, setPosts] = React.useState([]);
  React.useEffect(() => {
    loadAllPosts()
      .then((response: any) => setPosts(response.data))
      .catch((err: any) => {
        catchError(err, props.setResponseMessage, true, false);
      });
  }, []);

  return (
    <div className="main">
      <h2>Last posts</h2>
      {posts.map((post) => (
        <PostElement post={post} editable={false} />
      ))}
    </div>
  );
};

export default Home;
