import { CommonGetRequestOptions, CommonResponse } from "./types";

import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "./constants";

import { r114Request } from "./request";

export type User = {
  tokenNo: number;
  deviceId?: string | null;
  userNo: number;
  userBrokerageCd: string;
  brokerageCd: string;
  userRole: string;
  userId: string;
  userPw: string;
  userPwChgDt: string;
  userNm: string;
  userHpNo: string;
  authCi?: string | null;
  authDt?: string | null;
  userEmail: string;
  position: string;
  empNo: number;
  repYn: string;
  loginFailCnt: number;
  loginFailLastDt: string;
  loginSuccFirstDt: string;
  joinDt: string;
  joinType: string;
  joinStatus: string;
  joinStatusChgDt: string;
  svcStopYn: string;
  userStatus?: string | null;
  userStatusChgDt: string;
  existUserYn: string;
  existUserType?: string | null;
  bizUserTransDt: string;
  bizUserTrmDt?: string | null;
  withdrawRsnCd?: string | null;
  withdrawDesc?: string | null;
  withdrawYn: string;
  withdrawDt?: string | null;
  monthAmt: string;
  callbackAutoSendYn: string;
  receptSettingYn: string;
  kbLiivOnSendYn: string;
  corpNo: string;
  corpNoFileNo: string;
  corpNoFileNm: string;
  openNo: string;
  openNoFileNo: string;
  openNoFileNm: string;
  brokerageNm: string;
  repNm: string;
  mainUserTelNo: string;
  userTelNo: string;
  userFaxNo: string;
  zipCode: string;
  jibunAddr: string;
  roadAddr: string;
  detailAddr: string;
  addrSeq: number;
  addrX?: string | null;
  addrY?: string | null;
  adAddrType: string;
  adTelNoYn: string;
  adHpNoYn: string;
  repUserId: string;
  repUserHpNo: string;
  empNm: string;
  empHpNo: string;
  empOfficeNm: string;
  onlineCardFilePath?: string | null;
  onlineCardNo: number;
  unpaidDate?: string | null;
  cancellationDate?: string | null;
  dormancyYn?: string | null;
  dormancyDt?: string | null;
  reqMsg?: string | null;
  useEndDt?: string | null;
  useGoodCd: string;
  existYn?: string | null;
  username: string;
  authorities: [
    {
      authority: string;
    },
  ];
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  accountNonExpired: boolean;
  emptyOpenNo: boolean;
  userNoString: string;
  rep: boolean;
  existUser: boolean;
  pwChgRequired: boolean;
  exemptionJoinFeeBizUser: boolean;
  generalUser: boolean;
  associateUser: boolean;
  regularUser: boolean;
  maskEmpHpNo: string;
  leftSmartOneMonth: boolean;
  fullAddr: string;
  password: string;
  enabled: boolean;
};

export type GetUserResponse = CommonResponse<User | null>;

export async function getUser(
  options?: CommonGetRequestOptions,
): Promise<GetUserResponse> {
  if (options?.mode === "success-test") {
    return {
      code: REQUEST_SUCCESS_STATUS,
      msg: REQUEST_SUCCESS_MESSAGE,
      body: {
        tokenNo: 0,
        deviceId: null,
        userNo: 156,
        userBrokerageCd: "F21082300000002",
        brokerageCd: "F21082300000002",
        userRole: "3",
        userId: "testduck",
        userPw: "",
        userPwChgDt: "2024-08-05T09:00:28",
        userNm: "심덕용",
        userHpNo: "010-4226-5319",
        authCi: null,
        authDt: null,
        userEmail: "abcabc@r114.com",
        position: "대표",
        empNo: 148169,
        repYn: "Y",
        loginFailCnt: 0,
        loginFailLastDt: "2024-09-03T12:37:32",
        loginSuccFirstDt: "2021-08-23T13:41:20",
        joinDt: "2021-08-23T13:40:59",
        joinType: "1",
        joinStatus: "7",
        joinStatusChgDt: "2024-07-31T16:55:02",
        svcStopYn: "N",
        userStatus: null,
        userStatusChgDt: "2023-07-10T16:55:37",
        existUserYn: "N",
        existUserType: null,
        bizUserTransDt: "2021-08-23T13:54:31",
        bizUserTrmDt: null,
        withdrawRsnCd: null,
        withdrawDesc: null,
        withdrawYn: "N",
        withdrawDt: null,
        monthAmt: "M_AC_00000073,M_VC_00000482",
        callbackAutoSendYn: "Y",
        receptSettingYn: "N",
        kbLiivOnSendYn: "Y",
        corpNo: "739-33-00955",
        corpNoFileNo: "537",
        corpNoFileNm: "덕바1.jpg",
        openNo: "41590-2020-20203",
        openNoFileNo: "538",
        openNoFileNm: "오리1.jpg",
        brokerageNm: "다정한공인중개사사무소",
        repNm: "심덕용",
        mainUserTelNo: "031-710-1915",
        userTelNo: "031-710-1915",
        userFaxNo: "--",
        zipCode: "06694",
        jibunAddr: "서울특별시 서초구 방배동 474-14 엔지니어링기술진흥회관",
        roadAddr: "서울특별시 서초구 효령로 11 (방배동)",
        detailAddr: "102호",
        addrSeq: 20589,
        addrX: null,
        addrY: null,
        adAddrType: "1",
        adTelNoYn: "Y",
        adHpNoYn: "Y",
        repUserId: "testduck",
        repUserHpNo: "010-4226-5319",
        empNm: "문영애",
        empHpNo: "010-4687-0411",
        empOfficeNm: "수도권2지사",
        onlineCardFilePath: null,
        onlineCardNo: 23,
        unpaidDate: null,
        cancellationDate: null,
        dormancyYn: null,
        dormancyDt: null,
        reqMsg: null,
        useEndDt: null,
        useGoodCd: "",
        existYn: null,
        username: "testduck",
        authorities: [{ authority: "3" }],
        accountNonLocked: true,
        credentialsNonExpired: true,
        accountNonExpired: true,
        emptyOpenNo: false,
        userNoString: "156",
        rep: true,
        existUser: false,
        pwChgRequired: false,
        exemptionJoinFeeBizUser: false,
        generalUser: false,
        associateUser: false,
        regularUser: true,
        maskEmpHpNo: "010-****-0411",
        leftSmartOneMonth: false,
        fullAddr:
          "서울특별시 서초구 방배동 474-14 엔지니어링기술진흥회관 102호",
        password: "",
        enabled: true,
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
    const user = await r114Request<User>("/user");

    return user;
  } catch {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
}
