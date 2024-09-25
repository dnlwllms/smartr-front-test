"use client";

import { useQuery } from "react-query";

import Notice from "@/common/components/Notice";
import { getNoticeMain, NoticeMain } from "@/common/network/r114/notice-main";

import {
  SMARTR_ORIGIN_URL,
  LANDING_URL_NOTICE_LIST,
  LANDING_URL_NOTICE_DETAIL,
} from "@/src/constants";

export default function NoticeClient() {
  const { data, isLoading } = useQuery("notice-main", () => getNoticeMain());

  return (
    <div>
      <Notice
        data={data?.body}
        urls={{
          noticeListUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_NOTICE_LIST}`,
          noticeDetailUrl: `${SMARTR_ORIGIN_URL}${LANDING_URL_NOTICE_DETAIL}`,
        }}
        isLoading={isLoading}
      />
    </div>
  );
}
