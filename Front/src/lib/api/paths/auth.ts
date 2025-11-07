import { ApiRequest, User } from "@/lib/interfaces/api";
import discoApi, { setAuthHeader } from "../apiCore";
import errorHandling from "../errorHandling";

export const registerUser = async (payload: {
  name: string;
  email: string;
  password: string;
}) => {
  try {
    const { data: response } = await discoApi.post<ApiRequest<User>>(
      "/auth/register",
      payload
    );
    return response.data;
  } catch (e) {
    errorHandling(e);
  }
};

export const loginUser = async (payload: {
  email: string;
  password: string;
}) => {
  try {
    const { data: response } = await discoApi.post<
      ApiRequest<{ accessToken: string; userId: string }>
    >("/auth/login", payload);
    setAuthHeader(response.data.accessToken);
    localStorage.setItem("assessToken", response.data.accessToken);
    return response.data;
  } catch (e) {
    errorHandling(e);
  }
};

export const logoutUser = async () => {
  try {
    await discoApi.post("/auth/logout");
  } catch (e) {
    errorHandling(e);
  } finally {
    localStorage.removeItem("assessToken");
    setAuthHeader("");
  }
};

export const refreshUser = async () => {
  try {
    const { data: response } = await discoApi.post<
      ApiRequest<{ accessToken: string; userId: string }>
    >("/auth/refresh");
    setAuthHeader(response.data.accessToken);
    localStorage.setItem("assessToken", response.data.accessToken);
    return response.data;
  } catch (e) {
    setAuthHeader("");
    errorHandling(e);
  }
};
