import axios from "axios";

const TOKEN = localStorage.getItem("kracada:token");

const instance = axios.create({
  // baseURL: "http://localhost:9006/api",
  baseURL: "https://kracada-v2-api.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default instance;
