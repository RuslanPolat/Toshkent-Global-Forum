import axios from "axios";

export const myAxios = axios.create({
  baseURL: "http://tgf.kahero.uz/admin-api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
  }
});
