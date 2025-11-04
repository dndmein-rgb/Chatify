import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:import.meta.env.MODE==="development"?"https://chatify-server.vercel.app/api":"/api",
    withCredentials:true,

})