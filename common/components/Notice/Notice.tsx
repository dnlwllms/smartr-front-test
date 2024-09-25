"use client";

import Link from "next/link";
import { Fragment } from "react";

import { Empty } from "@hdc-ui/react/components";

import { NoticeMain } from "@/common/network/r114/notice-main";

type noticeUrl = {
  /**
   * 공지사항목록URL
   */
  noticeListUrl: string;
  /**
   * 공지사항상세URL
   */
  noticeDetailUrl: string;
};
export interface Props {
  /**
   * 공지사항 data
   */
  data?: NoticeMain | null;
  urls: noticeUrl;
  isLoading?: boolean;
}

export default function Notice(props: Props) {
  return (
    <div>
      <h4 className="mb-2.5">
        <Link
          href={props.urls.noticeListUrl}
          className={`flex items-center gap-x-1 text-body01b text-gray-900 ${props.isLoading ? "pointer-events-none cursor-default" : ""}`}
        >
          공지사항
          <svg className="h-4 w-4" aria-hidden>
            <use
              href="/icons/outlined/arrows.svg#Outlined/Arrows/right"
              width={16}
              height={16}
            />
          </svg>
        </Link>
      </h4>
      <ul
        className={`flex h-[248px] w-full flex-col rounded-2xl border border-gray-200 bg-white p-4 ${props.isLoading ? "animate-pulse" : ""}`}
      >
        {props.isLoading ? (
          <Fragment>
            {[0, 1, 2].map((_, index) => {
              return (
                <li
                  className="border-gray-200 bg-white [&:not(:first-of-type)]:pt-4 [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:pb-4"
                  key={index}
                  role={index === 0 ? "alert" : ""}
                  aria-busy={index === 0}
                  aria-label={index === 0 ? "공지사항 로딩" : ""}
                >
                  <div className="flex w-full flex-col gap-y-1">
                    <div
                      className="h-6 w-48 rounded-full bg-gray-200"
                      aria-hidden
                    />
                    <div
                      className="h-[18px] max-w-[360px] rounded-full bg-gray-200"
                      aria-hidden
                    />
                  </div>
                </li>
              );
            })}
          </Fragment>
        ) : props.data?.length !== 0 ? (
          props.data?.map((item) => {
            return (
              <li
                key={item.noticeNo}
                className="border-gray-200 bg-white [&:not(:first-of-type)]:pt-4 [&:not(:last-of-type)]:border-b [&:not(:last-of-type)]:pb-4"
              >
                <Link href={`${props.urls.noticeDetailUrl}/${item.noticeNo}`}>
                  <div className="flex w-full flex-col gap-y-1">
                    <p
                      className="block h-6 truncate text-body01m text-gray-900"
                      title={item.title}
                    >
                      {item.title}
                    </p>
                    <p
                      className="block truncate text-body02m text-gray-500"
                      title={item.regDate}
                      aria-label={`공지 날짜 ${item.regDate}`}
                    >
                      {item.regDate}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })
        ) : (
          <li className="relative h-full w-full">
            <Empty
              icons={
                <svg className="h-4 w-4">
                  <use
                    href="/icons/outlined/character.svg#Outlined/Character/attention"
                    width={16}
                    height={16}
                    color="#999"
                  />
                </svg>
              }
              description="공지사항이 없습니다."
              className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 transform"
            />
          </li>
        )}
      </ul>
    </div>
  );
}
