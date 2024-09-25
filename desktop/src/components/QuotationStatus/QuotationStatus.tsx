"use client";

import { useState } from "react";
import { useQuery } from "react-query";

import { Dropdown } from "@hdc-ui/react/components";
import SmartREmpty from "@/common/components/SmartREmpty";
import Spinner from "@/common/components/Spinner";

import { getQuotationStatus } from "@/common/network/r114/quotation-status";
import ActualTransactionPriceChart from "@/common/components/ActualTransactionPriceChart";

export interface Props {}

// TODO: 데이터 연동 필요
export default function QuotationStatus(props: Props) {
  const [filter, setFilter] = useState({
    aptCode: "",
    supplyArea: "",
    trdType: "",
  });

  const { data: quotationData, isLoading: quotationIsLoading } = useQuery(
    ["quotation-status", filter],
    () =>
      getQuotationStatus({
        // data: filter,
      }),
  );

  return (
    <div>
      <h3 className="mb-8 flex items-center text-heading03b" tabIndex={0}>
        등록 매물 호가 현황
      </h3>
      <div className="mb-10 flex gap-x-2">
        <label
          htmlFor="aptCode"
          className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden"
        >
          단지 선택
        </label>
        <Dropdown
          id="aptCode"
          value={filter.aptCode}
          options={[{ title: "서초그랑자이", value: "서초그랑자이" }]}
          style={{ width: 328 }}
          isDisabled={quotationIsLoading}
          onChange={(value) => {
            setFilter((prev) => {
              prev.aptCode = value;
              return { ...prev };
            });
          }}
        />
        <label
          htmlFor="supplyArea"
          className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden"
        >
          면적 선택
        </label>
        <Dropdown
          id="supplyArea"
          value={filter.supplyArea}
          options={[{ title: "83㎡", value: "83㎡" }]}
          style={{ width: 128 }}
          isDisabled={quotationIsLoading}
          onChange={(value) => {
            setFilter((prev) => {
              prev.supplyArea = value;
              return { ...prev };
            });
          }}
        />
        <label
          htmlFor="trdType"
          className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden"
        >
          거래 타입 선택
        </label>
        <Dropdown
          id="trdType"
          value={filter.trdType}
          options={[
            { title: "거래종류", value: "" },
            { title: "매매", value: "A1" },
            { title: "전세", value: "B1" },
            { title: "월세", value: "B2" },
            { title: "단기임대", value: "R1" },
          ]}
          style={{ width: 128 }}
          isDisabled={quotationIsLoading}
          onChange={(value) => {
            setFilter((prev) => {
              prev.trdType = value;
              return { ...prev };
            });
          }}
        />
      </div>
      {quotationIsLoading ? (
        <div className="relative h-[357px] w-full">
          <Spinner />
        </div>
      ) : quotationData?.body?.length !== 0 ? (
        <div className="flex flex-col gap-y-8">
          <div>
            <ActualTransactionPriceChart
              options={{
                aspectRatio: 1152 / 307,
              }}
            />
          </div>
          <span className="text-right text-body03m text-gray-500">
            2024.08.09 부동산R114 기준
          </span>
        </div>
      ) : (
        <div className="flex h-[357px] w-full items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-100">
          <SmartREmpty
            mainText="등록된 매물이 없습니다."
            subText="데이터를 불러오지 못했습니다."
          />
        </div>
      )}
    </div>
  );
}
