import { CommonGetRequestOptions, CommonResponse } from "./types";
import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "../../constants/network";
import r114Request from "./request";

export type UserAlarm = {
  /**
   * 알람여부
   */
  newAlarm: boolean;
};

export type GetUserAlarmResponse = CommonResponse<UserAlarm | null>;

export async function getUserAlarm(
  options?: CommonGetRequestOptions,
): Promise<GetUserAlarmResponse> {
  if (options?.mode === "success-test") {
    return {
      code: REQUEST_SUCCESS_STATUS,
      msg: REQUEST_SUCCESS_MESSAGE,
      body: {
        newAlarm: true,
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
    const userAlarm = await r114Request<UserAlarm>("/users/alarm");

    return userAlarm;
  } catch {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
}
