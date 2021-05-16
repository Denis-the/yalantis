export const getSessionStorageActiveUsersId = () => {
  let cachedActiveUsersId;
  const storage = window.sessionStorage.getItem("activeUsers");
  if (storage) {
    cachedActiveUsersId = [...storage.split(",")];
  } else {
    cachedActiveUsersId = [];
  }
  return cachedActiveUsersId;
};

export const addSessionStorageActiveUserId = (userId) => {
  const cachedActiveUsersId = getSessionStorageActiveUsersId();
  cachedActiveUsersId.push(userId);
  window.sessionStorage.setItem("activeUsers", cachedActiveUsersId);
};

export const removeSessionStorageActiveUserId = (userId) => {
  const cachedActiveUsersId = getSessionStorageActiveUsersId();
  const filteredArr = cachedActiveUsersId.filter((item) => userId !== item);
  window.sessionStorage.setItem("activeUsers", filteredArr);
};
