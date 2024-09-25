import { CommonGetRequestOptions, CommonResponse } from "./types";
import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "../../constants/network";
import r114Request from "./request";

export type GetMainMemulRequest = {
  /**
   * 매물종류
   */
  memulCategory?: string;
  /**
   * 거래종류
   */
  trdType?: string;
};

export type MainMemul = {
  /**
   * 매물코드
   */
  memulCode: string;
  /**
   * 매물종류
   */
  memulType: string;
  /**
   * 도
   */
  addr1: string;
  /**
   * 시
   */
  addr2: string;
  /**
   * 군/구/동
   */
  addr3: string;
  /**
   * 읍/면/리
   */
  addr4: string;
  /**
   * 구
   */
  addrGu: string;
  /**
   * 아파트이름
   */
  aptName: string;
  /**
   * 번지
   */
  bunji: string;
  /**
   * 동
   */
  dong?: string | null;
  /**
   * 호
   */
  ho?: string | null;
  /*
   * 등록일
   */
  memulRegDate: string;
  /**
   * 종료일
   */
  memulEndDate: string;
  /**
   * 거래종류
   */
  trdType: string;
  /**
   * 가격(매매/전세/월세 공통)
   */
  trdPrice: string;
  /**
   * 보증금
   */
  depositPrice: string;
}[];

export type GetMainMemulResponse = CommonResponse<MainMemul | null>;

export async function getMainMemul(
  options?: CommonGetRequestOptions<GetMainMemulRequest>,
): Promise<GetMainMemulResponse> {
  if (options?.mode === "success-test") {
    return {
      code: REQUEST_SUCCESS_STATUS,
      msg: REQUEST_SUCCESS_MESSAGE,
      body: [
        {
          addr1: "경기도",
          addr2: "성남시",
          addr3: "삼평동",
          addr4: "",
          addrGu: "분당구",
          aptName: "",
          bunji: "685",
          dong: null,
          ho: null,
          memulCode: "2407221058095",
          memulType: "아파트",
          memulRegDate: "2024.08.13",
          trdType: "",
          memulEndDate: "2024.09.14",
          trdPrice: "",
          depositPrice: "",
        },
        {
          addr1: "경기도",
          addr2: "성남시",
          addr3: "삼평동",
          addr4: "",
          addrGu: "분당구",
          aptName: "",
          bunji: "685",
          dong: null,
          ho: null,
          memulCode: "2407221058095",
          memulType: "아파트",
          memulRegDate: "2024.08.13",
          trdType: "",
          memulEndDate: "2024.09.14",
          trdPrice: "",
          depositPrice: "",
        },
        {
          addr1: "경기도",
          addr2: "성남시",
          addr3: "삼평동",
          addr4: "",
          addrGu: "분당구",
          aptName: "",
          bunji: "685",
          dong: null,
          ho: null,
          memulCode: "2407221058095",
          memulType: "아파트",
          memulRegDate: "2024.08.13",
          trdType: "",
          memulEndDate: "2024.09.14",
          trdPrice: "",
          depositPrice: "",
        },
        {
          addr1: "경기도",
          addr2: "성남시",
          addr3: "삼평동",
          addr4: "",
          addrGu: "분당구",
          aptName: "",
          bunji: "685",
          dong: null,
          ho: null,
          memulCode: "2407221058095",
          memulType: "아파트",
          memulRegDate: "2024.08.13",
          trdType: "",
          memulEndDate: "2024.09.14",
          trdPrice: "",
          depositPrice: "",
        },
        {
          addr1: "경기도",
          addr2: "성남시",
          addr3: "삼평동",
          addr4: "",
          addrGu: "분당구",
          aptName: "",
          bunji: "685",
          dong: null,
          ho: null,
          memulCode: "2407221058095",
          memulType: "아파트",
          memulRegDate: "2024.08.13",
          trdType: "",
          memulEndDate: "2024.09.14",
          trdPrice: "",
          depositPrice: "",
        },
      ],
    };
  } else if (options?.mode === "error-test") {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
  try {
    const mainMemul = await r114Request<MainMemul, GetMainMemulRequest>(
      "/memul/main",
      {
        method: "GET",
        data: options?.data,
      },
    );

    return mainMemul;
  } catch {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
}
