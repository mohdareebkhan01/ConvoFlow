import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development"
        ? "http://localhost:5000/api"
        : "https://convoflow-5c3u.onrender.com/api",
    withCredentials: true,
})