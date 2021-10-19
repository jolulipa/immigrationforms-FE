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

const handleError = (error) => {
  console.log("User has no access:", error);
};

export const readAllForms = async (userToken) => {
  const response = await fetch(`${baseUrl}/api/forms/readAllForms`, {
    method: "GET",
    headers: {
      jwt: token || userToken,
    },
  });
  const datos = await response.json();
  return datos.results;
};

export const readAllFormsAdm = async (userCli) => {
  const response = await fetch(
    `${baseUrl}/api/forms/readAllFormsAdm/${userCli}`,
    {
      method: "GET",
      headers: {
        jwt: token,
      },
    }
  );
  const datos = await response.json();
  return datos.results;
};

export const readForm = async (id) => {
  if (hasAccess) {
    const response = await fetch(`${baseUrl}/api/forms/readForm/${id}`, {
      method: "GET",
      headers: {
        jwt: token,
      },
    });
    const datos = await response.json();
    return await datos;
  } else {
    handleError();
  }
};

export const readIntakeForm = async (userToken) =>
  fetch(`${baseUrl}/api/forms/getIntake`, {
    method: "GET",
    headers: {
      jwt: token || userToken,
    },
  });

//CHECK INTAKE - USERID
export const checkIntake = async (userCli) =>
  await fetch(`${baseUrl}/api/forms/checkIntake/${userCli}`, {
    headers: {
      jwt: token,
    },
  });

export const createUpdateForm = async (values) => {
  try {
    console.log("DATOS ENVIADOS A UPDATE-CREATE form", values);
    await fetch(`${baseUrl}/api/forms/createUpdateForm`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        jwt: token,
      },
    });
    // const datos = await response.json();
    // return datos;
  } catch (error) {
    handleError(error);
  }
};

export const deleteForm = async (id) => {
  if (hasAccess) {
    await fetch(`${baseUrl}/api/forms/updateForm/${id}`, {
      method: "DELETE",
      headers: {
        jwt: token,
      },
    });
  } else {
    handleError();
  }
};

export const print = async (id) =>
  await fetch(`${baseUrl}/api/forms/print/${id}`, {
    method: "GET",
    headers: {
      jwt: token,
    },
  });
