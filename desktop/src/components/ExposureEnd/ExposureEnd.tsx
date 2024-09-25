"use client";
import { useState, useMemo } from "react";

import { NumberUtility } from "@hdc-ui/util";

import { useQuery } from "react-query";

import Spinner from "@/common/components/Spinner";
import SmartREmpty from "@/common/components/SmartREmpty";
import { getMainMemul } from "@/common/network/r114/main-memul";

import { Tag, Button, Dropdown } from "@hdc-ui/react/components";

export interface Props {}

export default function ExposureEnd(props: Props) {
  const [filter, setFilter] = useState({
    memulCategory: "",
    trdType: "",
  });

  const { data, isLoading } = useQuery(["main-memul", filter], () =>
    getMainMemul({
      data: filter,
    }),
  );

  const sliceList = useMemo(() => {
    return data?.body?.slice(0, 5);
  }, [data]);

  //TODO. 노출종료 URL? 텍스트? 결정 후 수정

  return (
    <div>
      <h3 className="mb-8 flex items-center justify-between text-heading03b">
        최근 노출종료된 매물
        {/* <Link href="" className="flex items-center gap-x-1">
          최근 노출종료된 매물
          <svg className="h-6 w-6" aria-hidden>
            <use
              href="/icons/outlined/arrows.svg#Outlined/Arrows/right"
              width={24}
              height={24}
            />
          </svg>
        </Link> */}
      </h3>
      <div className="mb-6 flex gap-x-2">
        <label
          htmlFor="memulCategory"
          className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden"
        >
          매물종류 선택
        </label>
        <Dropdown
          id="memulCategory"
          value={filter.memulCategory}
          options={[
            { title: "매물종류", value: "" },
            { title: "아파트/오피스텔", value: "A1" },
            { title: "원룸", value: "B1" },
            { title: "빌라/주택", value: "C1" },
            { title: "상가/업무/공장/토지", value: "D1" },
          ]}
          size="lg"
          style={{ width: 128 }}
          isDisabled={isLoading}
          onChange={(value) => {
            setFilter((prev) => {
              prev.memulCategory = value;
              return { ...prev };
            });
          }}
        />
        <label
          htmlFor="trdType"
          className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden"
        >
          거래종류 선택
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
          size="lg"
          style={{ width: 128 }}
          isDisabled={isLoading}
          onChange={(value) => {
            setFilter((prev) => {
              prev.trdType = value;
              return { ...prev };
            });
          }}
        />
      </div>

      {!isLoading ? (
        data?.body?.length !== 0 ? (
          <table className="h-[440px] w-full table-fixed bg-white text-left text-gray-900">
            <caption
              tabIndex={0}
              className="absolute -m-[1px] h-[1px] w-[1px] overflow-hidden"
            >
              최근 노출 종료된 매물 리스트
            </caption>
            <colgroup>
              <col width="17.35%" />
              <col width="19.95%" />
              <col width="10.41%" />
              <col width="20.82%" />
              <col width="14.05%" />
              <col width="17.35%" />
            </colgroup>
            <thead>
              <tr>
                <th
                  className="h-12 border-b border-gray-200 px-4 py-2.5 text-body02m"
                  scope="col"
                >
                  매물번호
                </th>
                <th
                  className="h-12 border-b border-gray-200 px-4 py-2.5 text-body02m"
                  scope="col"
                >
                  노출기간
                </th>
                <th
                  className="h-12 border-b border-gray-200 px-4 py-2.5 text-body02m"
                  scope="col"
                >
                  매물종류
                </th>
                <th
                  className="h-12 border-b border-gray-200 px-4 py-2.5 text-body02m"
                  scope="col"
                >
                  주소
                </th>
                <th
                  className="h-12 border-b border-gray-200 px-4 py-2.5 text-body02m"
                  scope="col"
                >
                  거래종류/금액
                </th>
                <th
                  className="h-12 border-b border-gray-200 px-4 py-2.5 text-body02m"
                  scope="col"
                >
                  관리
                </th>
              </tr>
            </thead>
            <tbody>
              {sliceList?.map(
                (
                  {
                    addr1,
                    addr2,
                    addr3,
                    addr4,
                    addrGu,
                    aptName,
                    bunji,
                    depositPrice,
                    memulCode,
                    memulEndDate,
                    memulRegDate,
                    memulType,
                    trdPrice,
                    trdType,
                    dong,
                    ho,
                  },
                  index,
                ) => {
                  const renderMemulType = () => {
                    switch (memulType) {
                      case "A1": {
                        return "아파트/오피스텔";
                      }
                      case "B1": {
                        return "원룸";
                      }
                      case "C1": {
                        return "빌라/주택";
                      }
                      case "D1": {
                        return "상가/업무/공장/토지";
                      }
                    }
                  };

                  const renderTypeAndPrice = () => {
                    switch (trdType) {
                      case "A1": {
                        return `매매 ${NumberUtility.getPropertyPriceNumber(Number(trdPrice)).replace("만", "")}`;
                      }
                      case "B1": {
                        return `전세 ${NumberUtility.getPropertyPriceNumber(Number(trdPrice)).replace("만", "")}`;
                      }
                      case "B2": {
                        return `월세 ${NumberUtility.getPropertyPriceNumber(Number(depositPrice)).replace("만", "")}/${NumberUtility.getPropertyPriceNumber(Number(trdPrice)).replace("만", "")}`;
                      }
                      case "R1": {
                        return `월세 ${NumberUtility.getPropertyPriceNumber(Number(depositPrice)).replace("만", "")}/${NumberUtility.getPropertyPriceNumber(Number(trdPrice)).replace("만", "")}`;
                      }
                    }
                  };

                  const renderAddress = () => {
                    const addressParts = [
                      addr1,
                      addr2,
                      addr3,
                      addr4,
                      addrGu,
                      bunji,
                      aptName,
                      dong,
                      ho,
                    ].filter(Boolean);
                    return addressParts.length === 0
                      ? "주소 없음"
                      : addressParts.join(" ");
                  };

                  return (
                    <tr key={index}>
                      <td
                        className="h-20 border-b border-gray-200 px-4 py-2.5 text-body02m"
                        title={memulCode}
                        scope="row"
                      >
                        <Tag className="border-transparent bg-[#34C7590D] text-green-500">
                          {memulCode}
                        </Tag>
                      </td>
                      <td
                        className="h-20 truncate border-b border-gray-200 px-4 py-2.5 text-body02m"
                        title={
                          memulRegDate && memulEndDate
                            ? `${memulRegDate} ~ ${memulEndDate}`
                            : "기간 없음"
                        }
                      >
                        {`${memulRegDate && memulEndDate ? `${memulRegDate} ~ ${memulEndDate}` : "기간 없음"}`}
                      </td>
                      <td
                        className="h-20 truncate border-b border-gray-200 px-4 py-2.5 text-body02m"
                        title={renderMemulType()}
                      >
                        {renderMemulType()}
                      </td>
                      <td
                        className="h-20 truncate border-b border-gray-200 px-4 py-2.5 text-body02m"
                        title={renderAddress()}
                      >
                        {renderAddress()}
                      </td>
                      <td
                        className="h-20 truncate border-b border-gray-200 px-4 py-2.5 text-body01b"
                        title={renderTypeAndPrice()}
                      >
                        {renderTypeAndPrice()}
                      </td>
                      <td className="h-20 truncate border-b border-gray-200 px-4 py-2.5 text-body02m">
                        <Button
                          type="button"
                          size="sm"
                          color="white"
                          className="w-[69px]"
                          disabled
                        >
                          재등록
                        </Button>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        ) : (
          <div className="flex h-[437px] w-full items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-100">
            <SmartREmpty
              mainText="등록된 매물이 없습니다."
              subText="데이터를 불러오지 못했습니다."
            />
          </div>
        )
      ) : (
        <div className="relative h-[447px] w-full">
          <Spinner />
        </div>
      )}
    </div>
  );
}
