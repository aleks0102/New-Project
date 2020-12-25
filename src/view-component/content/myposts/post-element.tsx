import * as React from "react";
import "./mypost.css";
import Components from "../../../components/components";
import { deletePost, publishPost } from "../../../service/requests";
import * as moment from "moment";
import postModel from "../../../models/postModel";
import { loadToken } from "../../../service/saveUserData";

interface PostElementProps {
  post: postModel;
  setPosts: Function;
  editable: boolean;
  setResponseMessage: Function;
  toggleResponseShow?: Function;
  showEndSession?: Function;
}

const PostElement: React.FC<PostElementProps> = ({
  post,
  setPosts,
  editable,
  toggleResponseShow,
  setResponseMessage,
  showEndSession,
}) => {
  const [showModal, toggleModal] = React.useState(false);
  const token: string = loadToken();
  const onDelete = () => {
    deletePost(post)
      .then((response) => {
        setPosts();
        setResponseMessage(response.data.message);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          showEndSession(true);
        } else {
          setResponseMessage(
            err.response.data.title || err.response.data.message
          );
          toggleResponseShow(true);
        }
      });
  };

  const onPublish = () => {
    publishPost(post)
      .then((response) => {
        setPosts();
        setResponseMessage(response.data.message);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          showEndSession(true);
        }
        setResponseMessage(
          err.response.data.title || err.response.data.message
        );
        toggleResponseShow(true);
      });
  };

  return (
    <div className={"postsGrid"}>
      <div className={"postItem"}>
        <h4 onClick={() => toggleModal(true)}>{post.title}</h4>
        <p onClick={() => toggleModal(true)}>{post.content}</p>
        {editable && showModal && (
          <div>
            <Components.PostModal
              setPosts={setPosts}
              post={post}
              closeWindow={() => toggleModal(false)}
              token={token}
              setResponseMessage={setResponseMessage}
              showEndSession={showEndSession}
              toggleResponseShow={(value: boolean) => toggleResponseShow(value)}

            />
          </div>
        )}
        <span>
          {moment(post.createdDate || post.publishedDate).format(
            "hh:mm,  DD/MM/YYYY"
          )}
        </span>
      </div>
      <div className={"postControls"}>
        {editable && (
          <Components.SmallButton text="Delete" onClick={onDelete} />
        )}
        {editable && !post.isPublished && (
          <Components.SmallButton text="Publish" onClick={onPublish} />
        )}
      </div>
    </div>
  );
};

export default PostElement;
