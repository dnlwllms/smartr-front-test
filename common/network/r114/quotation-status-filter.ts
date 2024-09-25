import { CommonGetRequestOptions, CommonResponse } from "./types";
import {
  REQUEST_FAILURE_MESSAGE,
  REQUEST_FAILURE_STATUS,
  REQUEST_SUCCESS_MESSAGE,
  REQUEST_SUCCESS_STATUS,
} from "../../constants/network";
import r114Request from "./request";

//TODO. Schema swagger 업데이트 시 수정

// export type QuotationRequestFilterType = {
//   /**
//    * 단지 코드
//    */
//   aptCode?: string;

//   /**
//    * 공급면적
//    */
//   supplyArea?: string;

//   /**
//    * 거래종류
//    */
//   trdType?: string;
// };

export type QuotationStatusFilter = {
  // /**
  //  * 단지명
  //  */
  // aptName: string;
  // /**
  //  * 단지코드
  //  */
  // aptCode: number;
  // /**
  //  * 공급면적
  //  */
  // supplyArea: number;
  // /**
  //  * 거래종류
  //  */
  // trdType: string;
  // /**
  //  * 등록일
  //  */
  // regDate: string;
  // /**
  //  * 가격 (만 단위)
  //  */
  // trdPrice: number;
};

export type GetQuotationStatusFilterResponse = CommonResponse<
  QuotationStatusFilter[] | null
>;

export async function getQuotationStatusFilter(
  options?: CommonGetRequestOptions,
): Promise<GetQuotationStatusFilterResponse> {
  if (options?.mode === "success-test") {
    return {
      code: REQUEST_SUCCESS_STATUS,
      msg: REQUEST_SUCCESS_MESSAGE,
      body: [
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.09.11",
        //   trdPrice: 37000,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.09.10",
        //   trdPrice: 38000,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.09.08",
        //   trdPrice: 36500,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.09.08",
        //   trdPrice: 35000,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.09.07",
        //   trdPrice: 38000,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.09.06",
        //   trdPrice: 38000,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.08.31",
        //   trdPrice: 31000,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.08.28",
        //   trdPrice: 40000,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.08.26",
        //   trdPrice: 32000,
        // },
        // {
        //   aptName: "개포주공5단지",
        //   aptCode: 1298,
        //   supplyArea: 116.04,
        //   trdType: "A1",
        //   regDate: "2024.08.17",
        //   trdPrice: 31000,
        // },
      ],
    };
  } else if (options?.mode === "error-test") {
    return {
      code: REQUEST_FAILURE_STATUS,
      msg: REQUEST_FAILURE_MESSAGE,
      body: null,
    };
  }
  const quotationStatusFilter = await r114Request<
    QuotationStatusFilter[]
    // ,QuotationRequestFilterType
  >("/memul/main/bids/filter", {
    method: "GET",
    data: options?.data,
  });

  return quotationStatusFilter;
}
