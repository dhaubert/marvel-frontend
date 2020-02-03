import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8600/",
  params: {}
});

export default api;
