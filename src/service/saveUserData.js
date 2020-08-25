export const saveStatus = (isAutorized, token, id, username) => {
  sessionStorage.setItem("isAutorized", JSON.stringify(isAutorized));
  sessionStorage.setItem("token", JSON.stringify(token));
  sessionStorage.setItem("currentUserId", JSON.stringify(id));
  sessionStorage.setItem("username", JSON.stringify(username));

};

export const loadStatus = () => {
  return JSON.parse(sessionStorage.getItem("isAutorized"));
};

export const loadToken = () => {
  return JSON.parse(sessionStorage.getItem("token"));
};

export const loadCurrentId = () => {
  return JSON.parse(sessionStorage.getItem("currentUserId"));
};

export const loadUserName = () => {
  return JSON.parse(sessionStorage.getItem("username"));
};
