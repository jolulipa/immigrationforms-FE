import { baseUrl } from "./configuration";
import { AUTH_TOKEN } from "../constants/storageKeys";

const token = localStorage.readItem(AUTH_TOKEN);
console.log(token);

export const registerUser = (values) =>
  fetch(`${baseUrl}/api/auth/register`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
export const loginUser = (values) =>
  fetch(`${baseUrl}/api/auth/login`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
    },
  });
export const readUsers = () =>
  fetch(`${baseUrl}/api/auth/readUsers`, {
    method: "GET",
    headers: {
      jwt: { token },
    },
  });
