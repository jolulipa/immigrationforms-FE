import { baseUrl } from "./configuration";
import { AUTH_TOKEN } from "../constants/storageKeys";

const token = localStorage.getItem(AUTH_TOKEN);

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
export const readUsers = async () => {
  const response = await fetch(`${baseUrl}/api/auth/readUsers`, {
    method: "GET",
    headers: {
      jwt: token,
    },
  });
  return await response.json();
};
