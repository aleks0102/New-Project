export const saveUsers = (users) => {
  const savedUsers = JSON.stringify(users);
  localStorage.setItem("users", savedUsers);
};

export const loadUsers = () => {
  const savedUsers = localStorage.getItem("users");
  if (savedUsers === null) {
    return undefined;
  }
  return JSON.parse(savedUsers);
};