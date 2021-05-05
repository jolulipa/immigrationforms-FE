import {baseUrl} from "./configuration";

export const registerUser = (values) => fetch(`${baseUrl}/api/auth/register`, {
    method: 'POST',
    body: JSON.stringify(values),
    headers: {
        'Content-Type': 'application/json'
    }
});
