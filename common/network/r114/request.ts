type SmartrRequestOptions<T = any> = {
  isJsonResponse?: boolean;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: T;
};

const isDevelopment = process.env.NODE_ENV === "development";

export const apiUrl = isDevelopment ? "http://localhost:8090" : "";

export async function r114Request<T>(
  uri: string,
  options?: SmartrRequestOptions<T>,
  init?: RequestInit
) {
  if (options?.method === "GET" && !!options?.data) {
    uri += `?${new URLSearchParams(options.data).toString()}`;
  }
  try {
    const response = await fetch(`${apiUrl}${uri}`, {
      ...init,
      method: options?.method,
      headers: {
        ...init?.headers,
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json;charset=UTF-8",
      },
      ...(options?.method !== "GET" &&
        !!options?.data && {
          body: JSON.stringify(options.data),
        }),
    });

    const json = await response.json();

    return json;
  } catch (e) {
    console.log(e);
  }
}
