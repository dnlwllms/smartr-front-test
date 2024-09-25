import { NumberUtility } from "@hdc-ui/util";

import { CommonGetRequestOptions, CommonResponse } from "./types";
import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "../../constants/network";
import r114Request from "./request";

export type UserStatus = {
  /**
   * 상품주문아이디
   */
  prodOrdId: string;
  /**
   * 상품명
   */
  prodName: string;
  /**
   * 충전금
   */
  charge: number;
  /**
   * 발급쿠폰
   */
  issueCoupon: number;
  /**
   * 사용쿠폰
   */
  useCoupon: number;
  /**
   * 사용가능쿠폰
   */
  availableCoupon: number;
  /**
   * 상품사용시작일
   */
  prodStartDate: string;
  /**
   * 상품사용종료일
   */
  prodEndDate: string;
};

export type GetUserStatusResponse = CommonResponse<UserStatus | null>;

export async function getUserStatus(
  options?: CommonGetRequestOptions,
): Promise<GetUserStatusResponse> {
  if (options?.mode === "success-test") {
    return {
      code: REQUEST_SUCCESS_STATUS,
      msg: REQUEST_SUCCESS_MESSAGE,
      body: {
        prodOrdId: "테스트",
        prodName: "테스트",
        charge: NumberUtility.getRandomNumber(),
        issueCoupon: NumberUtility.getRandomNumber(),
        useCoupon: NumberUtility.getRandomNumber(),
        availableCoupon: NumberUtility.getRandomNumber(),
        prodStartDate: "0",
        prodEndDate: "1",
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
    const userStatus = await r114Request<UserStatus>("/users/status");

    return userStatus;
  } catch {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
}
