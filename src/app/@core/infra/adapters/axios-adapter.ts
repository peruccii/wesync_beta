import axios, { AxiosError, AxiosResponse } from "axios";
import { HttpClient } from "./fetch-adapter";
import { http } from "@/utils/http";

export class AxiosHttpClientAdapter implements HttpClient {
 async request(data: any) {
  let axiosResponse: AxiosResponse;

  try {
   axiosResponse = await axios.request({
    url: http + data.url,
    method: data.method,
    data: data.body
   })
  } catch (err) {
    const _error = err as AxiosError<{ message: string }>;
    throw new Error(_error?.response?.data?.message);
  }

  return {
   statusCode: axiosResponse.status,
   body: axiosResponse?.data
  }
 }
}