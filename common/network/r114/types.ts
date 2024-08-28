export type CommonGetRequestOptions = {
  mode?: "normal" | "success-test" | "error-test";
};

export type CommonResponse<T> = {
  status: 200 | 500;
  message: string;
  data: T;
};
