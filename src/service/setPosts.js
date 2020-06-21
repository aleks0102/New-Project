export const savePosts = (posts) => {
  const savedPosts = JSON.stringify(posts);
  localStorage.setItem("posts", savedPosts);
};

export const loadPosts = () => {
  const savedPosts = localStorage.getItem("posts");
  if (savedPosts === null) {
    return undefined;
  }
  return JSON.parse(savedPosts);
};
