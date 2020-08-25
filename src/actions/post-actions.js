export const SET_MYPOSTS = "SET-MYPOSTS";
export const SET_ALLPOSTS = "SET-ALLPOSTS";
export const SORT = "SORT";

export const setMyPosts = (posts) => {
  return { type: SET_MYPOSTS, payload: { posts: posts } };
};

export const setAllPosts = (posts) => {
  return { type: SET_ALLPOSTS, payload: {posts: posts}}
}

export const sortByDate = (posts) => {
  return { type: SORT, payload: { posts: posts } };
};
