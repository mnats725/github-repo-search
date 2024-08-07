import axios from "axios";

import { extractMessageOnErrorResponse } from "@api/interceptors/extract-message-on-error-response";

const BASE_URL = import.meta.env.VITE_GITHUB_API_BASE_URL;

export const repositoryClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
