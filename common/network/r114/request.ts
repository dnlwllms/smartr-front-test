"use server";

import { cookies } from "next/headers";

import { CommonResponse } from "./types";
import { apiHost } from "../../constants/network";

type SmartrRequestOptions<RequestType = any> = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: RequestType;
} & RequestInit;

export default async function r114Request<
  ResponseType = any,
  RequestType = any,
>(uri: string, options?: SmartrRequestOptions<RequestType>) {
  let token = "";

  let body;

  if (cookies().get("session")?.value) {
    token += cookies().get("session")?.value;
  }

  if (options?.method === "GET" && !!options?.data) {
    uri += `?${new URLSearchParams(options.data).toString()}`;
  }

  if (options?.method !== "GET") {
    if (options?.data instanceof FormData) {
      body = options.data;
    }
    if (isJson(options?.data)) {
      body = JSON.stringify(options?.data);
    }
  }

  const response = await fetch(`${apiHost}${uri}`, {
    ...options,
    headers: {
      "Access-Control-Allow-Origin": "*",
      Authorization: token,
      "Content-Type": "application/json;charset=UTF-8",
      ...options?.headers,
    },
    ...(body && { body }),
  });

  let json = {};

  try {
    json = await response.json();
  } catch (e) {
    throw e;
  }

  return json as CommonResponse<ResponseType>;
}

function isJson(value: unknown) {
  try {
    JSON.stringify(value);

    return true;
  } catch {
    return false;
  }
}
