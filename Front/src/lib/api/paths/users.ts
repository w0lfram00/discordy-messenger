import { ApiRequest, Srvr, SrvrPreview, User } from "@/lib/interfaces/api";
import discoApi from "../apiCore";
import errorHandling from "../errorHandling";

export const getUsersServers = async (userId: string) => {
  try {
    const { data: response } = await discoApi.get<ApiRequest<SrvrPreview[]>>(
      "/users/" + userId + "/servers"
    );
    console.log(response);

    return response.data;
  } catch (e) {
    console.log(e);

    errorHandling(e);
    return [];
  }
};
