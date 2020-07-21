export const saveProfiles = (profiles) => {
  const savedProfiles = JSON.stringify(profiles);
  localStorage.setItem("profiles", savedProfiles);
};

export const loadedProfiles = () => {
  const savedProfiles = localStorage.getItem("profiles");
  if (savedProfiles === null) {
    return [];
  }
  return JSON.parse(savedProfiles);
};