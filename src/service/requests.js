import Axios from "axios";
import { loadToken, loadCurrentId } from "./saveUserData";

const hostname = "https://localhost:44373";
const authenticate = () => {
  return {
    headers: {
      Authorization: "Bearer " + loadToken(),
    },
  };
};


export const catchError = (err, setResponseMessage, endSession, reload) => {
  if (!err.response) {
    setResponseMessage(true, "Network error");
  } else if (err.response.status == 401) {
    endSession(true, reload);
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

export const getProfile = () => {
  return Axios.get(
    `${hostname}/api/profile/getprofile?id=${loadCurrentId()}`,
    authenticate()
  );
};

export const saveProfile = (user) => {
  return Axios.post(
    `${hostname}/api/profile/save?id=${loadCurrentId()}`,
    user,
    authenticate()
  );
};

//Post

export const loadPosts = () => {
  return Axios.get(`${hostname}/api/post/getmyposts`, authenticate());
};

export const createPost = (post) => {
  return Axios.post(`${hostname}/api/post/create`, post, authenticate());
};

export const deletePost = (post) => {
  return Axios.post(`${hostname}/api/post/delete`, post, authenticate());
};

export const publishPost = (post) => {
  return Axios.post(`${hostname}/api/post/publish`, post, authenticate());
};

export const loadAllPosts = () => {
  return Axios.get(`${hostname}/api/post/getall`);
};

export const updatePost = (post) => {
  return Axios.post(`${hostname}/api/post/update`, post, authenticate());
};
