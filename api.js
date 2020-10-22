import axios from "axios";

const callApi = async (method, path, data, jwt) => {
  const headers = {
    Authorization: jwt,
    "Content-Type": "application/json",
  };
  const baseUrl = "http://c7129c5e34c3.ngrok.io/api/v1";
  const fullUrl = `${baseUrl}${path}`;
  if (method === "get" || method === "delete") {
    return axios[method](fullUrl, { headers });
  } else {
    return axios[method](fullUrl, data, { headers });
  }
};

export default {
  createAccount: (form) => callApi("post", "/users/", form),
  login: (form) => callApi("post", "/users/login/", form),
  rooms: (page) => callApi("get", `/rooms/?page=${page}`),
};
