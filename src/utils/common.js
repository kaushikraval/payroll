export const setSessionDataValue = (key, value) => {
  sessionStorage.setItem(key, window.btoa(JSON.stringify(value)));
};
export const getSessionDatavalue = key => {
  const sessionData = sessionStorage.getItem(key);
  if (sessionData) {
    return JSON.parse(window.atob(sessionData));
  } else {
    return null;
  }
};
export const removeSessionDatavalue = key => {
  sessionStorage.removeItem(key);
};
