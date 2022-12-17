import axios from "axios";

export const USER_SERVICE_URL = axios.create({
  baseURL: "https://reqres.in/api",
});

export const getAllUsers = async () => {
  // const response = await axios.get("https://reqres.in/api/users?page=2");
  const response = await USER_SERVICE_URL.get("/users?page=2");
  return response.data.data;
};

export const getUserDetail = async (userId) => {
  const req = await USER_SERVICE_URL.get(`/users/${userId}`);
  console.log("getUserDetail", req);
  return req.data.data;
};
