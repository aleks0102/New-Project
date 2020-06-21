export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem("state", serializedState);
};

export const loadState = () => {
  const serializedState = localStorage.getItem("state");
  if (serializedState === null) {
    return 1;
  }
  return JSON.parse(serializedState);
};
