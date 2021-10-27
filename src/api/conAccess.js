import { baseUrl } from "./configuration";
import { AUTH_TOKEN } from "../constants/storageKeys";
import JWT from "jwt-decode";

let hasAccess = false;
const token = localStorage.getItem(AUTH_TOKEN) || "";

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

export const readAllOffice = async () => {
  const response = await fetch(`${baseUrl}/api/conce/readAllCons`, {
    method: "GET",
    headers: {
      jwt: token,
    },
  });
  const datos = await response.json();
  return await datos.results;
};

export const readConOffice = async (concessionary) => {
  const response = await fetch(
    `${baseUrl}/api/conce/public/readConOffice/${concessionary}`,
    {
      method: "GET",
    }
  );
  const datos = await response.json();
  return await datos;
};

export const createUpdateConOffice = async (values) => {
  try {
    const response = await fetch(`${baseUrl}/api/conce/createUpdateConOffice`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        jwt: token,
      },
    });
    const datos = await response.json();
    return datos;
  } catch (error) {
    console.log("ERROR RETURNED", error);
  }
};

export const deleteConOffice = async (id) => {
  if (hasAccess) {
    await fetch(`${baseUrl}/api/conce/updateForm/${id}`, {
      method: "DELETE",
      headers: {
        jwt: token,
      },
    });
  } else {
    handleError();
  }
};
