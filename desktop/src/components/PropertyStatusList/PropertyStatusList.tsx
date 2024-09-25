"use client";

import Link from "next/link";

import { useQuery } from "react-query";
import { Button } from "@hdc-ui/react/components";

import PropertyStatus from "@/common/components/PropertyStatusButton";
import { getPropertyStatus } from "@/common/network/r114/property-status";
import {
  LANDING_URL_PROPERTY_ADD,
  SMARTR_ORIGIN_URL,
  LANDING_URL_NAVER_PROPERTY,
  LANDING_URL_R114_PROPERTY,
  LANDING_URL_PROPERTY,
} from "@/src/constants";

export interface Props {}

export default function PropertyStatusList(props: Props) {
  const { data, isLoading } = useQuery("property-status", () =>
    getPropertyStatus(),
  );

  return (
    <div>
      <h3 className="mb-8 flex items-center justify-between text-heading03b">
        매물현황
        <Link
          href={`${SMARTR_ORIGIN_URL}${LANDING_URL_PROPERTY_ADD}`}
          className={isLoading ? "pointer-events-none cursor-default" : ""}
        >
          <Button size="lg" className="px-6" tabIndex={-1} disabled={isLoading}>
            매물등록
            <svg aria-hidden>
              <use
                href="/icons/outlined/character.svg#Outlined/Character/plus"
                width={16}
                height={16}
              />
            </svg>
          </Button>
        </Link>
      </h3>
      <PropertyStatus
        items={[
          {
            title: "네이버 매물",
            count: data?.body?.naverCnt,
            href: `${SMARTR_ORIGIN_URL}${LANDING_URL_NAVER_PROPERTY}`,
          },
          {
            title: "R114 매물",
            count: data?.body?.r114Cnt,
            href: `${SMARTR_ORIGIN_URL}${LANDING_URL_R114_PROPERTY}`,
          },
          {
            title: "확인실패",
            count: data?.body?.checkFailCnt,
            href: `${SMARTR_ORIGIN_URL}${LANDING_URL_PROPERTY}`,
          },
          {
            title: "등록실패",
            count: data?.body?.regFailCnt,
            href: `${SMARTR_ORIGIN_URL}${LANDING_URL_PROPERTY}`,
          },
          {
            title: "노출종료",
            count: data?.body?.endExposureCnt,
            href: `${SMARTR_ORIGIN_URL}${LANDING_URL_PROPERTY}`,
          },
        ]}
        isLoading={isLoading}
      />
    </div>
  );
}
