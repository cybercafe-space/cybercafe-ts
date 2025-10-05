import { SpaceError } from "../errors/SpaceError";
import axios, { AxiosRequestConfig } from "axios";
import FormData from "form-data";

export async function request<T>(
  url: string,
  options: RequestInit & {
    data?: any;
    responseType?: "json" | "arraybuffer" | "text";
  } = {}
): Promise<T> {
  try {
    const axiosConfig: AxiosRequestConfig = {
      method: options.method || "GET",
      url,
      headers: {
        ...(options.headers as Record<string, string>),
      },
      responseType: options.responseType || "json",
      data: undefined,
    };

    if (options.data) {
      axiosConfig.data = options.data;

      // If it's FormData, let axios set headers automatically
      if (options.data instanceof FormData) {
        axiosConfig.headers = {
          ...axiosConfig.headers,
          ...options.data.getHeaders(),
        };
      } else {
        axiosConfig.headers = {
          ...axiosConfig.headers,
          "Content-Type": "application/json",
        };
      }
    }

    const response = await axios(axiosConfig);

    return response.data as T;

  } catch (err: any) {

    const message = err.response?.data?.error || err.message;

    throw new SpaceError(message);
  }
}
