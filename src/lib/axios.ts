import axios from "axios";

export const api = axios.create({
  baseURL: "https://apijsonproesc.mutech.online",
});
