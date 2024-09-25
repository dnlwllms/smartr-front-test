export type CommonGetRequestOptions<T = {}> = {
  mode?: "normal" | "success-test" | "error-test";
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: T;
};

export type CommonResponse<T> = {
  code: 200 | 500;
  msg: string;
  body: T;
};