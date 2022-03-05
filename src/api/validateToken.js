import { AUTH_TOKEN } from "../constants/storageKeys";
import JWT from "jwt-decode";

const validateToken = () => {
  let hasAccess = false;
  const token = localStorage.getItem(AUTH_TOKEN);

  if (!!token) {
    const decodedExp = JWT(token);
    const currentTimestamp = Date.now() / 1000;
    hasAccess = decodedExp.exp > currentTimestamp;
  } else {
    hasAccess = false;
  }
  return hasAccess, token;
};

export default validateToken;
