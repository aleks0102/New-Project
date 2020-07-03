export const saveMessages = (messages) => {
  const savedMessages = JSON.stringify(messages);
  localStorage.setItem("messages", savedMessages);
};

export const loadMessages = () => {
  const savedMessages = localStorage.getItem("messages");
  if (savedMessages === null) {
    return undefined;
  }
  return JSON.parse(savedMessages);
};