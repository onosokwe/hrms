import axios from "axios";

const TOKEN = localStorage.getItem("kloka:token:data");

const instance = axios.create({
  // baseURL: "http://localhost:9006/api",
  baseURL: "https://kloka-api-b0c0cc5775ef.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

export default instance;
