import { baseUrl } from "./configuration";
import { AUTH_TOKEN } from "../constants/storageKeys";
import JWT from "jwt-decode";

let hasAccess = false;
const token = localStorage.getItem(AUTH_TOKEN);
if (!!token) {
  const decodedExp = JWT(token);
  const currentTimestamp = Date.now() / 1000;
  hasAccess = decodedExp.exp > currentTimestamp;
} else {
  hasAccess = false;
}

const handleError = () => {
  console.log("User has no access.");
};

export const readAllForms = async () => {
  const response = await fetch(`${baseUrl}/api/forms/readAllForms`, {
    method: "GET",
    headers: {
      jwt: token,
    },
  });
  return await response.json();
};

export const readForm = (id) =>
  fetch(`${baseUrl}/api/forms/readForm/${id}`, {
    method: "GET",
    headers: {
      jwt: token,
    },
  })
    .then((result) => result.json())
    .catch((error) => {
      console.log(error);
    });

export const createUpdateForm = (values, id) => {
  fetch(`${baseUrl}/api/forms/createUpdateForm/${id}`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      jwt: token,
    },
  })
    .then((result) => result.json())
    .catch((error) => {
      console.log(error);
    });
};

export const deleteForm = (id) => {
  if (hasAccess) {
    fetch(`${baseUrl}/api/forms/updateForm/${id}`, {
      method: "DELETE",
      headers: {
        jwt: token,
      },
    });
  } else {
    handleError();
  }
};

export const print = async (id) => fetch(`${baseUrl}/api/forms/print/${id}`, {
  method: "GET",
      headers: {
    jwt: token,
  },
});
