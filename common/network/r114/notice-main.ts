import { CommonGetRequestOptions, CommonResponse } from "./types";
import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "../../constants/network";
import r114Request from "./request";

export type NoticeMain = {
  /**
   * 공지사항번호
   */
  noticeNo: number;
  /**
   * 공지사항 제목
   */
  title: string;
  /**
   * 공지사항 내용
   */
  content: string;
  /**
   * 전시여부
   */
  isNotionExh: string;
  /**
   * 상단고정여부
   */
  isFix: string;
  /**
   * 등록일
   */
  regDate: string;
  /**
   * 등록자 아이디
   */
  regId: string;
  /**
   * 수정일
   */
  updDate: string;
  /**
   * 수정자 아이디
   */
  updId: string;
  /**
   * 삭제 여부
   */
  isDelete: string;
}[];

export type GetNoticeMainResponse = CommonResponse<NoticeMain | null>;

export async function getNoticeMain(
  options?: CommonGetRequestOptions,
): Promise<GetNoticeMainResponse> {
  if (options?.mode === "success-test") {
    return {
      code: REQUEST_SUCCESS_STATUS,
      msg: REQUEST_SUCCESS_MESSAGE,
      body: [
        {
          content: '',
          isDelete: "N",
          isFix: "Y",
          isNotionExh: "Y",
          noticeNo: 1177,
          regDate: "2024-05-07",
          regId: "Yoi0830",
          title: "[국토교통부] 관리비 세부내역 표시·광고 가이드라인",
          updDate: "",
          updId: "",
        },
        {
          content: '"fafawefawefawefawfafaf"',
          isDelete: "N",
          isFix: "Y",
          isNotionExh: "Y",
          noticeNo: 1176,
          regDate: "2024-04-19",
          regId: "Yoi0830",
          title: "aefadfasdfasfasfas",
          updDate: "",
          updId: "",
        },
        {
          content: "bbbbbbbbcccccccccc",
          isDelete: "N",
          isFix: "Y",
          isNotionExh: "Y",
          noticeNo: 1175,
          regDate: "2024-05-07",
          regId: "Yoi0830",
          title: "aaaaaaaa",
          updDate: "",
          updId: "",
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
    const noticeMain = await r114Request<NoticeMain>("/notice/main");

    return noticeMain;
  } catch {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
}
