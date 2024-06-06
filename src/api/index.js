import axios from "axios";
import { getToken } from "./storage";

const instance = axios.create({
  baseURL: "https://react-bank-project.eapi.joincoded.com",
});

instance.interceptors.request.use((req) => {
  const token = getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default instance;
