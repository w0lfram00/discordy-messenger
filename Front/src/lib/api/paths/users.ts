import { ApiRequest, User } from "@/lib/interfaces/api";
import discoApi from "../apiCore";
import errorHandling from "../errorHandling";

export const getUserInfo = async (userId: string) => {
  try {
    const { data: response } = await discoApi.get<ApiRequest<User>>(
      "/users/" + userId
    );
    return response.data;
  } catch (e) {
    errorHandling(e);
  }
};
