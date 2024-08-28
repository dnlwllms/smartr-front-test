import { NumberUtility } from "@hdc-ui/util";

import { CommonGetRequestOptions, CommonResponse } from "./types";
import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "./constants";

export type GetListingStatusResponse = CommonResponse<{
  naver: number;
  r114: number;
  verificationFailed: number;
  registrationFailed: number;
  exposureEnd: number;
} | null>;

export async function getListingStatus(
  options?: CommonGetRequestOptions
): Promise<GetListingStatusResponse> {
  if (options?.mode === "success-test") {
    return {
      status: REQUEST_SUCCESS_STATUS,
      message: REQUEST_SUCCESS_MESSAGE,
      data: {
        naver: NumberUtility.getRandomNumber(),
        r114: NumberUtility.getRandomNumber(),
        verificationFailed: NumberUtility.getRandomNumber(),
        registrationFailed: NumberUtility.getRandomNumber(),
        exposureEnd: NumberUtility.getRandomNumber(),
      },
    };
  } else if (options?.mode === "error-test") {
    return {
      status: REQUEST_FAILURE_STATUS,
      message: REQUEST_FAILURE_MESSAGE,
      data: null,
    };
  }
  try {
    //TODO: R114 API 연동
    return {
      status: REQUEST_SUCCESS_STATUS,
      message: REQUEST_SUCCESS_MESSAGE,
      data: {
        naver: 0,
        r114: 0,
        verificationFailed: 0,
        registrationFailed: 0,
        exposureEnd: 0,
      },
    };
  } catch {
    return {
      status: REQUEST_FAILURE_STATUS,
      message: REQUEST_FAILURE_MESSAGE,
      data: null,
    };
  }
}
