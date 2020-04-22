import axios from "axios";

const api = axios.create({
  baseURL: "https://ga-project3-backend.herokuapp.com/api/",
});

export const getAllItems = async () => {
  const resp = await api.get("/items");
  return resp.data;
};
export const getAllReviews = async () => {
  const resp = await api.get("/reviews");
  return resp.data;
};
