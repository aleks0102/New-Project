export const sortPosts = (posts, sort, id) => {
  const newPosts = posts.map((p) => p);
  newPosts.sort((a, b) =>
    (newPosts[0].id == id ? a.id < b.id : a.id > b.id) ? 1 : -1
  );
  sort(newPosts);
};

export const divideArr = (arr, contentPerPage) => {
  let allPages = [];
  let page = [];

  for (let j = 0; j < arr.length; j++) {
    arr[j] && page.push(arr[j]);
    if (page.length == contentPerPage || j == arr.length - 1) {
      allPages.push(page);
      page = [];
    }
  }
  return allPages;
};

export const validateField = (e, required, style) => {
  if (!e.target.value && required) {
    e.target.classList = style.validate;
  } else e.target.className = null;
};

export const capitalizeFirstLetter = (text) =>
  text[0].toUpperCase() + text.slice(1);
