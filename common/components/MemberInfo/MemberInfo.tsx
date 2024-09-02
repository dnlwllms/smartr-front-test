import { format } from "date-fns";

import Link from "next/link";

import { FC } from "react";

import { Button, Tag } from "@hdc-ui/react/components";

export interface Props {
  membershipLevel: string;
  name: string;
  contractPeriod: [Date, Date];
  deposit: number;
  couponCount: number;
  subscriptionProductName: string;
}

const MemberInfo: FC<Props> = ({
  membershipLevel,
  name,
  contractPeriod,
  deposit,
  couponCount,
  subscriptionProductName,
}) => {
  const rederMember = () => {
    switch (membershipLevel) {
      case "정회원": {
        return (
          <Tag
            className="border-[#FF2D550D] bg-[#FF2D550D] text-primary-500"
            isCapsule
          >
            정회원
          </Tag>
        );
      }
    }
  };

  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 flex w-full flex-col gap-y-1.5">
        <div>{rederMember()}</div>
        <div className="flex items-end justify-between">
          <div>
            <h4 className="flex items-start gap-x-0.5 text-heading04b text-gray-900">
              {name}님
              <span
                className="block h-1 w-1 rounded bg-red-500"
                aria-live="polite"
                aria-label="새로운 정보가 있습니다."
              />
            </h4>
            <p className="text-body02m text-gray-500">{`${format(contractPeriod[0], "yyyy.MM.dd")} ~ ${format(contractPeriod[1], "yyyy.MM.dd")}`}</p>
          </div>
          <Button color="white" size="lg" isCapsule>
            <svg aria-hidden="true">
              <use href="icons/outlined/edit.svg#Outlined/Edit/write" />
            </svg>
            재계약
          </Button>
        </div>
      </div>
      <div className="mb-2.5 flex w-full flex-col rounded-2xl bg-gradient-to-r from-[#FF617F] via-[#FF476A] via-[31.79%] to-[#F91A45] to-[100%] p-4 text-white">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-1 text-body01m">
            <span className="flex h-5 w-5 items-center justify-center rounded bg-white text-primary-500">
              R
            </span>
            충전금
          </div>
          <h4 className="text-heading04b">{deposit.toLocaleString()}원</h4>
        </div>
        <hr className="mb-2.5 mt-3 h-[1px] w-full bg-primary-200" />
        <ul className="flex flex-col gap-y-1.5">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 text-body01m">
              <svg width={16} height={16} aria-hidden="true">
                <use href="icons/outlined/money.svg#Outlined/Money/bank-card" />
              </svg>
              쿠폰
            </div>
            <button type="button" className="text-body01b">
              {couponCount.toLocaleString()}개
            </button>
          </li>
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 text-body01m">
              <svg width={16} height={16} aria-hidden="true">
                <use href="icons/outlined/base.svg#Outlined/Base/gift" />
              </svg>
              상품
            </div>
            <button type="button" className="text-body01b">
              {subscriptionProductName}
            </button>
          </li>
        </ul>
      </div>
      <div className="flex w-full items-center justify-between rounded-2xl bg-gray-100 px-4 py-3 text-body01m text-gray-900">
        My 메뉴
        <ul className="flex gap-x-[17px]">
          <li className="after:content[``] relative after:absolute after:-right-2.5 after:top-2/4 after:h-2 after:w-[1px] after:-translate-y-2/4 after:bg-gray-200">
            <Link href="" className="text-body02m text-gray-500">
              홈페이지 관리
            </Link>
          </li>
          <li>
            <Link href="" className="text-body02m text-gray-500">
              회원정보 수정
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MemberInfo;
