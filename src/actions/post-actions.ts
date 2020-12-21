export const SET_MYPOSTS = "SET-MYPOSTS";
export const SET_ALLPOSTS = "SET-ALLPOSTS";
export const SORT = "SORT";

export const setMyPosts = (posts:any) => {
  return { type: SET_MYPOSTS, payload: { posts: posts } };
};

export const setAllPosts = (posts:any) => {
  return { type: SET_ALLPOSTS, payload: {posts: posts}}
}

export const sort = (posts:any) => {
  return { type: SORT, payload: { posts: posts } };
};
