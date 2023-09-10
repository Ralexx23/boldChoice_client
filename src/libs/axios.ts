import axios from "axios";
import { useAuthStore } from "../store/auth.store";

export  const authApi = axios.create({
    baseURL: "http://localhost:3000/api/v1/",
    withCredentials: true
});

authApi.interceptors.request.use(config => {
    const token = useAuthStore.getState().token;
    config.headers = {
        Authorization: `Bearer ${token}`
    } as any;
    return config;
});

export default authApi;