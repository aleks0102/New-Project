export const saveUsers = (users) => {
  const savedUsers = JSON.stringify(users);
  localStorage.setItem("users", savedUsers);
};

export const loadUsers = () => {
  const savedUsers = localStorage.getItem("users");
  if (savedUsers === null) {
    return [];
  }
  return JSON.parse(savedUsers);
};

export const saveCurrentUser = (user) => {
  const savedUser = JSON.stringify(user);
  localStorage.setItem("currentUser", savedUser);
};

export const loadCurrentUser = () => {
  const savedUser = localStorage.getItem("currentUser");
  if (savedUser === null) {
    return [];
  }
  return JSON.parse(savedUser);
};


export const saveStatus = (isAutorized) => {
  const savedStatus = JSON.stringify(isAutorized);
  localStorage.setItem("isAutorized", savedStatus);
};

export const loadStatus = () => {
  const savedStatus = localStorage.getItem("isAutorized");
  return JSON.parse(savedStatus);
};
