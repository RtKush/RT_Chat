import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://chatapp-api-xb0i.onrender.com" : "/api",
  withCredentials: true,
});
