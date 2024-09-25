"use client";

import { parse, format } from "date-fns";

import Link from "next/link";

import { Button, Tag, Badge } from "@hdc-ui/react/components";

import { User } from "@/common/network/r114/user";

import { UserAlarm } from "@/common/network/r114/user-alarm";
import { UserStatus } from "@/common/network/r114/user-status";

type UserData = {
  /**
   * 회원정보 API
   */
  user?: User | null;

  /**
   * 회원가입정보API
   */
  userStatus?: UserStatus | null;

  /**
   * 유저알람여부API
   */
  userAlarm?: UserAlarm | null;
};

type UserInfoUrl = {
  /**
   * 재계약URL
   */
  contractRenewalUrl: string;
  /**
   * 회원정보수정URL
   */
  editUserInfoUrl: string;
  /**
   * 홈페이지관리URL
   */
  homepageManagementUrl: string;
  /**
   * 알람URL
   */
  alarmUrl: string;
  /**
   * 충전금URL
   */
  rechargeUrl: string;
  /**
   * 쿠폰URL
   */
  couponUrl: string;
  /**
   * 상품URL
   */
  goodsUrl: string;
};

export interface Props {
  /**
   * 회원 API
   */
  data: UserData;

  /**
   * 컴포넌트 URL
   */
  urls: UserInfoUrl;

  /**
   * 회원정보로딩
   */
  usersIsLoading?: boolean;
  /**
   * 회원가입정보로딩
   */
  userStatusIsLoading?: boolean;
}

export default function UserInfo(props: Props) {
  //TODO. 회원 Role에 따른 디자인 정책 확인 필요
  let tagName;
  let tagColor = "border-none bg-[#FF2D550D] text-primary-500";

  switch (props.data.user?.userRole) {
    case "1": {
      tagName = "일반회원";
      break;
    }
    case "2": {
      tagName = "준회원";
      break;
    }
    case "3": {
      tagName = "정회원";
      break;
    }
    case "4": {
      tagName = "미납회원";
      break;
    }
    case "5": {
      tagName = "해지예정회원";
      break;
    }
    case "6": {
      tagName = "해지요청회원";
      break;
    }
    case "7": {
      tagName = "(준)다구좌회원";
      break;
    }
    case "8": {
      tagName = "(정)다구좌회원";
      break;
    }
  }

  const isLoading = props.usersIsLoading || props.userStatusIsLoading;

  if (isLoading)
    return (
      <div className="flex w-full flex-col">
        <div className="mb-4 flex w-full flex-col gap-y-1.5">
          <div className="animate-pulse">
            <div
              className="h-6 w-12 rounded-full bg-gray-200"
              aria-busy
              role="alert"
              aria-label="회원 타입 로딩"
            />
          </div>
          <div className="flex w-full items-end justify-between">
            <div className="w-[calc(100%-140px)] animate-pulse">
              <div
                className="mb-0.5 h-[28px] w-24 rounded bg-gray-200"
                aria-busy
                role="alert"
                aria-label="회원 이름 로딩"
              />
              <div
                className="h-[21px] w-48 rounded bg-gray-200"
                aria-busy
                role="alert"
                aria-label="회원 가입날짜 로딩"
              />
            </div>
            <Link
              href={props.urls.contractRenewalUrl}
              className="pointer-events-none"
            >
              <Button
                color="white"
                size="lg"
                isCapsule
                className="px-4"
                disabled
              >
                <svg aria-hidden>
                  <use href="icons/outlined/edit.svg#Outlined/Edit/write" />
                </svg>
                재계약
              </Button>
            </Link>
          </div>
        </div>

        <div className="mb-2.5 flex w-full animate-pulse flex-col rounded-2xl">
          <div
            className="h-[139px] w-full rounded-2xl bg-gray-200"
            aria-busy
            role="alert"
            aria-label="회원상태 로딩"
          />
        </div>

        <div className="flex w-full items-center justify-between rounded-2xl bg-gray-100 px-4 py-3 text-body01m text-gray-900">
          My 메뉴
          <ul className="flex gap-x-[17px]">
            <li className="after:content[``] relative after:absolute after:-right-2.5 after:top-2/4 after:h-2 after:w-[1px] after:-translate-y-2/4 after:bg-gray-200">
              <Link
                href={props.urls.homepageManagementUrl}
                className="pointer-events-none cursor-default text-body02m text-gray-500"
                aria-label="My 메뉴 홈페이지 관리 버튼"
              >
                홈페이지 관리
              </Link>
            </li>
            <li>
              <Link
                href={props.urls.editUserInfoUrl}
                className="pointer-events-none cursor-default text-body02m text-gray-500"
                aria-label="My 메뉴 회원정보 수정 버튼"
              >
                회원정보 수정
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );

  return (
    <div className="flex w-full flex-col">
      <div className="mb-4 flex w-full flex-col gap-y-1.5">
        <div>
          <Tag className={tagColor} isCapsule>
            {tagName}
          </Tag>
        </div>
        <div className="flex w-full items-end justify-between">
          <div className="w-[calc(100%-140px)]">
            <h4 className="flex w-full items-start gap-x-0.5 truncate text-heading04b text-gray-900">
              <Badge
                aria-label="새로운 정보가 있습니다."
                isVisble={props.data.userAlarm?.newAlarm}
              >
                <p className="truncate">
                  <Link href={props.urls.alarmUrl}>
                    {props.data.user ? props.data.user.userNm + "님" : "-"}
                  </Link>
                </p>
              </Badge>
            </h4>
            <p
              className="text-body02m text-gray-500"
              aria-label="상품 가입기간"
            >
              {parseRangeString([
                String(props.data.userStatus?.prodStartDate),
                String(props.data.userStatus?.prodEndDate),
              ])}
            </p>
          </div>
          <Link href={props.urls.contractRenewalUrl}>
            <Button color="white" size="lg" isCapsule className="px-4">
              <svg aria-hidden>
                <use href="icons/outlined/edit.svg#Outlined/Edit/write" />
              </svg>
              재계약
            </Button>
          </Link>
        </div>
      </div>

      <div className="mb-2.5 flex w-full flex-col rounded-2xl bg-gradient-to-r from-[#FF617F] via-[#FF476A] via-[31.79%] to-[#F91A45] to-[100%] p-4 text-white">
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-x-1 whitespace-nowrap text-body01m">
            <span
              className="flex h-5 w-5 items-center justify-center rounded bg-white text-primary-500"
              aria-hidden
            >
              R
            </span>
            충전금
          </div>
          <div className="flex w-[calc(100%-70px)] justify-end text-heading04b">
            <Link
              className="truncate"
              title={props.data.userStatus?.charge.toLocaleString()}
              href={props.urls.rechargeUrl}
            >
              {toLocaleString(props.data.userStatus?.charge)}원
            </Link>
          </div>
        </div>
        <hr className="mb-2.5 mt-3 h-[1px] w-full bg-primary-200" />
        <ul className="flex flex-col gap-y-1.5">
          <li className="flex items-center justify-between">
            <div className="flex items-center gap-x-2 whitespace-nowrap text-body01m">
              <svg width={16} height={16} aria-hidden>
                <use href="icons/outlined/money.svg#Outlined/Money/bank-card" />
              </svg>
              쿠폰
            </div>
            <div className="flex w-[calc(100%-55px)] justify-end text-body01b">
              <Link
                className="truncate"
                title={props.data.userStatus?.availableCoupon.toLocaleString()}
                href={props.urls.couponUrl}
              >
                {toLocaleString(props.data.userStatus?.availableCoupon)}개
              </Link>
            </div>
          </li>
          <li className="flex w-full items-center justify-between">
            <div className="flex items-center gap-x-2 whitespace-nowrap text-body01m">
              <svg width={16} height={16} aria-hidden>
                <use href="icons/outlined/base.svg#Outlined/Base/gift" />
              </svg>
              상품
            </div>
            <div className="flex w-[calc(100%-55px)] justify-end">
              <Link
                className="truncate text-body01b"
                title={props.data.userStatus?.prodName}
                href={props.urls.goodsUrl}
              >
                {props.data.userStatus ? props.data.userStatus.prodName : "-"}
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="flex w-full items-center justify-between rounded-2xl bg-gray-100 px-4 py-3 text-body01m text-gray-900">
        My 메뉴
        <ul className="flex gap-x-[17px]">
          <li className="after:content[``] relative after:absolute after:-right-2.5 after:top-2/4 after:h-2 after:w-[1px] after:-translate-y-2/4 after:bg-gray-200">
            <Link
              href={props.urls.homepageManagementUrl}
              className="text-body02m text-gray-500"
              aria-label="My 메뉴 홈페이지 관리 버튼"
            >
              홈페이지 관리
            </Link>
          </li>
          <li>
            <Link
              href={props.urls.editUserInfoUrl}
              className="text-body02m text-gray-500"
              aria-label="My 메뉴 회원정보 수정 버튼"
            >
              회원정보 수정
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

function toLocaleString(value?: number) {
  return value ? value.toLocaleString() : "-";
}

/**
 * 날짜 형식(rangeString) yyyyMMddHHmmss으로 사용
 * 이 외에는 "날짜형식오류" 리턴
 * @param rangeString
 * @returns
 */
function parseRangeString(rangeString: [string, string]) {
  function parseDateString(dateString: string) {
    return format(parse(dateString, "yyyyMMddHHmmss", new Date()), "yy.MM.dd");
  }

  try {
    return `${parseDateString(rangeString[0])} ~ ${parseDateString(rangeString[1])}`;
  } catch (e) {
    return "날짜형식오류";
  }
}
