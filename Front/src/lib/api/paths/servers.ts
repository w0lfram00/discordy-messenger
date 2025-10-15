import { ApiRequest, Srvr } from "@/lib/interfaces/api";
import discoApi from "../apiCore";
import errorHandling from "../errorHandling";
import { RequestInit } from "next/dist/server/web/spec-extension/request";

export const createSrvr = async (payload: { name: string }) => {
  try {
    const { data: response } = await discoApi.post<ApiRequest<Srvr>>(
      "/servers",
      payload
    );
    return response.data;
  } catch (e) {
    errorHandling(e);
  }
};

export const getSrvrInfo = async (srvrId: string) => {
  try {
    const { data: response } = await discoApi.get<ApiRequest<Srvr>>(
      "/servers/" + srvrId
    );
    return response.data;
  } catch (e) {
    errorHandling(e);
  }
};

export const deleteSrvr = async (srvrId: string) => {
  try {
    await discoApi.delete<ApiRequest<Srvr>>("/servers/" + srvrId);
    return srvrId;
  } catch (e) {
    errorHandling(e);
  }
};
