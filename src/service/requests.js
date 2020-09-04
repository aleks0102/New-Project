import Axios from "axios";

const hostname = "https://localhost:44373";
const authenticate = (token) => {
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

export const catchError = (err, setResponseMessage, endSession) => {
  if (!err.response) {
    setResponseMessage(true, "Network error");
  } else if (err.response.status == 401) {
    endSession(true, true);
  } else
    setResponseMessage(
      true,
      err.response.data.title || err.response.data.message
    );
};

//News

export const getNews = () => {
  return Axios.get(`https://jsonplaceholder.typicode.com/posts`);
};

//Auth

export const login = (user) => {
  return Axios.post(`${hostname}/api/user/authenticate`, user);
};

export const registrate = (user) => {
  return Axios.post(`${hostname}/api/user/register`, user);
};

//Profile

export const getProfile = (id, token) => {
  return Axios.get(
    `${hostname}/api/profile/getprofile?id=${id}`,
    authenticate(token)
  );
};

export const saveProfile = (id, user, token) => {
  return Axios.post(
    `${hostname}/api/profile/save?id=${id}`,
    user,
    authenticate(token)
  );
};

//Post

export const loadPosts = (token) => {
  return Axios.get(`${hostname}/api/post/getmyposts`, authenticate(token));
};

export const createPost = (post, token) => {
  return Axios.post(`${hostname}/api/post/create`, post, authenticate(token));
};

export const deletePost = (post, token) => {
  return Axios.post(`${hostname}/api/post/delete`, post, authenticate(token));
};

export const publishPost = (post, token) => {
  return Axios.post(`${hostname}/api/post/publish`, post, authenticate(token));
};

export const loadAllPosts = () => {
  return Axios.get(`${hostname}/api/post/getall`);
};

export const updatePost = (post, token) => {
  return Axios.post(`${hostname}/api/post/update`, post, authenticate(token));
};
