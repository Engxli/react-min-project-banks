import instance from ".";
import { storeToken } from "./storage";

const register = async (userInfo) => {
  const formData = new FormData();

  for (let key in userInfo) {
    formData.append(key, userInfo[key]);
  }

  const res = await instance.post("/mini-project/api/auth/register", formData);

  if (res.data) {
    storeToken(res.data.token);
  }
  return res.data;
};

export { register };
