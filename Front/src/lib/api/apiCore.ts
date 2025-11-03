import axios from "axios";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

const discoApi = axios.create({
  baseURL: backendUrl,
  withCredentials: true,
});

export const setAuthHeader = (token: string) => {
  discoApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export default discoApi;
