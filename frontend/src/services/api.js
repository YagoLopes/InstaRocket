import axios from "axios";
export const baseURL = "http://192.168.8.135:3333";
export const api = axios.create({
  baseURL: baseURL
});
