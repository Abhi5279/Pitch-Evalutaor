import axios from "axios";

/* ===============================
   AXIOS BASE INSTANCE
================================= */

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: false,
});

/* ===============================
   ATTACH JWT TOKEN AUTOMATICALLY
================================= */

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/* ===============================
   GLOBAL ERROR HANDLER
================================= */

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Unauthorized → redirect to login
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default API;
