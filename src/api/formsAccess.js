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

export const readAllForms = (values) => {
  if (hasAccess) {
    fetch(`${baseUrl}/api/forms/readAllForms`, {
      method: "GET",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        jwt: token,
      },
    });
  } else {
    handleError();
  }
};

export const createForm = (values) => {
  if (hasAccess) {
    fetch(`${baseUrl}/api/forms/createForm`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        jwt: token,
      },
    });
  } else {
    handleError();
  }
};

export const readForm = (values) => {
  if (hasAccess) {
    fetch(`${baseUrl}/api/forms/readForm/:id`, {
      method: "GET",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        jwt: token,
      },
    });
  } else {
    handleError();
  }
};

export const updateForm = (values) => {
  if (hasAccess) {
    fetch(`${baseUrl}/api/forms/updateForm/:id`, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        jwt: token,
      },
    });
  } else {
    handleError();
  }
};

export const deleteForm = (values) => {
  if (hasAccess) {
    fetch(`${baseUrl}/api/forms/updateForm/:id`, {
      method: "DELETE",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        jwt: token,
      },
    });
  } else {
    handleError();
  }
};
