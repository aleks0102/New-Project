export const sortPosts = (posts, sort, id) => {
  const newPosts = posts.map((p) => p);
  newPosts.sort((a, b) =>
    (newPosts[0].id == id ? a.id < b.id : a.id > b.id) ? 1 : -1
  );
  sort(newPosts);
};

export const divideArr = (arr, divider) => {
  let arrOfArrs = [];
  let currentArr = [];
  let item = 0;

  for (let i = 0; i < divider; i++) {
    for (let j = 0; j < arr.length / divider; j++) {
      if (arr[item]) currentArr.push(arr[item]);
      item++;
    }
    arrOfArrs.push(currentArr);
    currentArr = [];
  }

  return arrOfArrs;
};

export const validateField = (e, required, style) => {
  if (!e.target.value && required) {
    e.target.classList = style.validate;
  } else e.target.className = null;
};
