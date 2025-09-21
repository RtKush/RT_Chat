import axios from "axios";

const baseURL = import.meta.env.VITE_SOCKET_BASE_URL || "http://localhost:5001";

// ✅ Create axios instance
export const axiosInstance = axios.create({
  baseURL: baseURL + "/api", // ✅ works for Render
  withCredentials: true, // ✅ include cookie
});
