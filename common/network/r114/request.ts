import { cookies } from "next/headers";
import { CommonResponse } from "./types";

type SmartrRequestOptions<RequestType = any> = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: RequestType;
} & RequestInit;

const isDevelopment = process.env.NODE_ENV === "development";

export const apiUrl = isDevelopment ? "http://localhost:8090" : "";

export async function r114Request<ResponseType = any, RequestType = any>(
  uri: string,
  options?: SmartrRequestOptions<RequestType>,
) {
  let token = "Bearer ";
  if (typeof window === "undefined") {
    token += cookies().get("session")?.value;
  } else {
    const matches = document.cookie.match(
      new RegExp(
        "(?:^|; )" +
          "session".replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") +
          "=([^;]*)",
      ),
    );
    if (matches) {
      token += decodeURIComponent(matches[1]);
    }
  }

  if (options?.method === "GET" && !!options?.data) {
    uri += `?${new URLSearchParams(options.data).toString()}`;
  }
  const response = await fetch(`${apiUrl}${uri}`, {
    ...options,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
      "Content-Type": "application/json;charset=UTF-8",
      ...options?.headers,
    },
    ...(options?.method !== "GET" &&
      !!options?.data && {
        body:
          options?.data instanceof FormData
            ? options.data
            : JSON.stringify(options.data),
      }),
  });

  const json = await response.json();

  return json as CommonResponse<ResponseType>;
}
