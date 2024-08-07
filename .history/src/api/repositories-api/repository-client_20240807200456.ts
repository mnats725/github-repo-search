import axios from "axios";

const BASE_URL = import.meta.env.GITHUB_API_BASE_URL;

console.log(BASE_URL);

export const repositoryClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
