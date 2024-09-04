export type CommonGetRequestOptions = {
  mode?: "normal" | "success-test" | "error-test";
};

export type CommonResponse<T> = {
  code: 200 | 500;
  msg: string;
  body: T;
};
