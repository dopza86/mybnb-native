import axios from "axios";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://9f5c761bc45a.ngrok.io/api/v1";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

// export const signUp = (form) =>
//   axios.post("http://127.0.0.1:8000/api/v1/users/", form, {
//     withCredentials: true,
//   });

export const createAccount = (form) => callApi("post", "/users/", form);
