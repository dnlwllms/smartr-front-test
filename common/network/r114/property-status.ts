import { NumberUtility } from "@hdc-ui/util";

import { CommonGetRequestOptions, CommonResponse } from "./types";
import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "./constants";
import { r114Request } from "./request";

export type PropertyStatus = {
  /**
   * R114 매물
   */
  r114Cnt: number;
  /**
   * 네이버전송 매물
   */
  naverCnt: number;
  /**
   * 확인실패
   */
  checkFailCnt: number;
  /**
   * 등록실패
   */
  regFailCnt: number;
  /**
   * 노출종료
   */
  endExposureCnt: number;
};

export type GetListingStatusResponse = CommonResponse<PropertyStatus | null>;

export async function getPropertyStatus(
  options?: CommonGetRequestOptions,
): Promise<GetListingStatusResponse> {
  if (options?.mode === "success-test") {
    return {
      code: REQUEST_SUCCESS_STATUS,
      msg: REQUEST_SUCCESS_MESSAGE,
      body: {
        naverCnt: NumberUtility.getRandomNumber(),
        r114Cnt: NumberUtility.getRandomNumber(),
        checkFailCnt: NumberUtility.getRandomNumber(),
        regFailCnt: NumberUtility.getRandomNumber(),
        endExposureCnt: NumberUtility.getRandomNumber(),
      },
    };
  } else if (options?.mode === "error-test") {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
  try {
    const propertyStatus =
      await r114Request<PropertyStatus>("/main/memul/status");

    return propertyStatus;
  } catch {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
}
