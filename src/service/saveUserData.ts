export const saveStatus = (isAuthorized:any, token:any, id:any, username:any) => {
  sessionStorage.setItem("isAuthorized", JSON.stringify(isAuthorized));
  sessionStorage.setItem("token", JSON.stringify(token));
  sessionStorage.setItem("currentId", JSON.stringify(id));
  sessionStorage.setItem("username", JSON.stringify(username));

};

export const loadStatus = () => {
  return JSON.parse(sessionStorage.getItem("isAuthorized"));
};

export const loadToken = () => {
  return JSON.parse(sessionStorage.getItem("token"));
};

export const loadCurrentId = () => {
  return JSON.parse(sessionStorage.getItem("currentId"));
};

export const loadUserName = () => {
  return JSON.parse(sessionStorage.getItem("username"));
};
