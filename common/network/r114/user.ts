import { CommonGetRequestOptions, CommonResponse } from "./types";

import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "../../constants/network";

import r114Request from "./request";

export type User = {
  /**
   * 토큰번호
   */
  tokenNo: number;
  /**
   * 디바이스 아이디
   */
  deviceId?: string | null;
  /**
   * 회원번호
   */
  userNo: number;
  /**
   * 중개업소코드
   */
  userBrokerageCd: string;
  /**
   * 대표중개업소코드, F + 날짜(6) + 증가(8)
   */
  brokerageCd: string;
  /**
   * 회원구분 - 권한,
   * 일반회원: 1,
   * smartR회원(준): 2,
   * smartR회원(정): 3,
   * 미납회원: 4,
   * 해지예정회원: 5,
   * 해지요청회원: 6 ,
   * 다구좌(준) : 7,
   * 다구좌(정) : 8
   */
  userRole: string;
  /**
   * 아이디
   */
  userId: string;
  /**
   * 비밀번호
   */
  userPw: string;
  /**
   * 비밀번호변경일
   */
  userPwChgDt: string;
  /**
   * 이름
   */
  userNm: string;
  /**
   * 휴대폰번호
   */
  userHpNo: string;
  /**
   * CI
   */
  authCi?: string | null;
  /**
   * 본인인증일시
   */
  authDt?: string | null;
  /**
   * 이메일
   */
  userEmail: string;
  /**
   * 직책
   */
  position: string;
  /**
   * 담당사원_회원번호
   */
  empNo: number;
  /**
   * 대표여부
   */
  repYn: string;
  /**
   * 로그인실패횟수
   */
  loginFailCnt: number;
  /**
   * 로그인실패마지막일시
   */
  loginFailLastDt: string;
  /**
   * 로그인성공최초일시
   */
  loginSuccFirstDt: string;
  /**
   * 가입일시
   */
  joinDt: string;
  /**
   * 가입구분
   */
  joinType: string;
  /**
   * 가입상태
   */
  joinStatus: string;
  /**
   * 가입상태변경일시
   */
  joinStatusChgDt: string;
  /**
   * 서비스중지여부
   */
  svcStopYn: string;
  /**
   * 계정상태
   */
  userStatus?: string | null;
  /**
   * 계정상태변경일시
   */
  userStatusChgDt: string;
  /**
   * 기존회원여부
   */
  existUserYn: string;
  /**
   * 기존회원구분
   */
  existUserType?: string | null;
  /**
   * 비즈회원_전환일시
   */
  bizUserTransDt: string;
  /**
   * 비즈회원_해지일시
   */
  bizUserTrmDt?: string | null;
  /**
   * 탈퇴사유코드
   */
  withdrawRsnCd?: string | null;
  /**
   * 탈퇴비고
   */
  withdrawDesc?: string | null;
  /**
   * 탈퇴여부
   */
  withdrawYn: string;
  /**
   * 탈퇴일시
   */
  withdrawDt?: string | null;
  /**
   * 월정액
   */
  monthAmt: string;
  /**
   * 콜백자동전송여부
   */
  callbackAutoSendYn: string;
  /**
   * 수신설정여부- 연락처남기기 ON?OFF
   */
  receptSettingYn: string;
  /**
   * KB리브온전송여부
   */
  kbLiivOnSendYn: string;
  /**
   * 사업자등록번호
   */
  corpNo: string;
  /**
   * 사업자등록증_파일번호
   */
  corpNoFileNo: string;
  /**
   * 사업자등록증_파일명
   */
  corpNoFileNm: string;
  /**
   * 개설등록번호
   */
  openNo: string;
  /**
   * 개설등록증_파일번호
   */
  openNoFileNo: string;
  /**
   * 개설등록증_파일명
   */
  openNoFileNm: string;
  /**
   * 중개업소명
   */
  brokerageNm: string;
  /**
   * 대표자명
   */
  repNm: string;
  /**
   * 대표전화명
   */
  mainUserTelNo: string;
  /**
   * 전화번호
   */
  userTelNo: string;
  /**
   * 팩스번호
   */
  userFaxNo: string;
  /**
   * 우편번호
   */
  zipCode: string;
  /**
   * 지번주소
   */
  jibunAddr: string;
  /**
   * 도로명주소
   */
  roadAddr: string;
  /**
   * 상세주소
   */
  detailAddr: string;
  /**
   * 주소정보_순번
   */
  addrSeq: number;
  /**
   * 네이버주소_X좌표
   */
  addrX?: string | null;
  /**
   * 네이버주소_Y좌표
   */
  addrY?: string | null;
  /**
   * 광고노출소재지주소구분(지번:1, 도로명:2)
   */
  adAddrType: string;
  /**
   * 광고노출전화번호여부
   */
  adTelNoYn: string;
  /**
   * 광고노출휴대폰번호여부
   */
  adHpNoYn: string;
  /**
   * 대표아이디
   */
  repUserId: string;
  /**
   * 대표휴대폰번호
   */
  repUserHpNo: string;
  /**
   * 담당사원_이흠
   */
  empNm: string;
  /**
   * 담당사원_핸드폰
   */
  empHpNo: string;
  /**
   * 담당사원_지사명
   */
  empOfficeNm: string;
  /**
   * 온라인명함_파일경로
   */
  onlineCardFilePath?: string | null;
  /**
   * 온라인명함번호
   */
  onlineCardNo: number;
  /**
   * 미납일시
   */
  unpaidDate?: string | null;
  /**
   * 해지예정변경일시
   */
  cancellationDate?: string | null;
  /**
   * 휴면계정여부
   */
  dormancyYn?: string | null;
  /**
   * 휴면계정일시
   */
  dormancyDt?: string | null;
  /**
   * 요청 사유
   */
  reqMsg?: string | null;
  /**
   * 스마트 R 사용 종료
   */
  useEndDt?: string | null;
  /**
   * 사용 상품
   */
  useGoodCd: string;
  /**
   * 중복 여부
   */


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
    const user = await r114Request<User>("/users");

    return user;
  } catch {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
}
