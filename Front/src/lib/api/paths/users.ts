import { ApiRequest, SrvrPreview, User } from "@/lib/interfaces/api";
import discoApi from "../apiCore";
import errorHandling from "../errorHandling";

export const getUsersInfo = async (userId: string) => {
  try {
    const { data: response } = await discoApi.get<ApiRequest<User>>(
      "/users/" + userId
    );

    return response.data;
  } catch (e) {
    console.log(e);

    errorHandling(e);
    return [];
  }
};

export const getUsersServers = async (userId: string) => {
  try {
    const { data: response } = await discoApi.get<ApiRequest<SrvrPreview[]>>(
      "/users/" + userId + "/servers"
    );

    return response.data;
  } catch (e) {
    console.log(e);

    errorHandling(e);
    return [];
  }
};
