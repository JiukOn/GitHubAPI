import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/JiukOn",
});

export default api;
