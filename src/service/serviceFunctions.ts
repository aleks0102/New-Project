export const sortPosts = (posts:any, sort:any, id:any) => {
  const newPosts = posts.map((p:any) => p);
  newPosts.sort((a:any, b:any) =>
    (newPosts[0].id == id ? a.id < b.id : a.id > b.id) ? 1 : -1
  );
  sort(newPosts);
};

export const divideArr = (arr:any, contentPerPage:any) => {
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

export const validateField = (e:any, required:any, style:any) => {
  if (!e.target.value && required) {
    e.target.classList = style.validate;
  } else e.target.className = null;
};

export const capitalizeFirstLetter = (text:any) =>
  text[0].toUpperCase() + text.slice(1);
