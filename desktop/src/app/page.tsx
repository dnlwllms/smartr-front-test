import Link from "next/link";

import { Button } from "@hdc-ui/react/components";

import PropertyStatusButton from "@/common/components/PropertyStatusButton";
import MemberInfo from "@/common/components/MemberInfo";

import { getPropertyStatus } from "@/common/network/r114/property-status";
import Popup from "@/common/components/Popup";

import {
  LANDING_URL_CONTRACT_RENEWAL,
  LANDING_URL_EDIT_USERINFO,
  LANDING_URL_HOMEPAGE_MANAGEMENT,
  SMARTR_ORIGIN_URL,
} from "../constants";

export const revalidate = 10;

export default async function Page() {
  const { body: propertyStatusData } = await getPropertyStatus({
    // mode: "success-test",
  });

  const containerStyle =
    "rounded-3xl border-solid border-gray-200 p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)]";

  return (
    <main>
      <div className="m-auto flex min-w-[1200px] items-start justify-center gap-6 p-8">
        <div className={`max-w-full ${containerStyle}`}>
          <h3 className="mb-8 flex items-center justify-between text-heading03b">
            <div className="flex items-center gap-x-0.5">매물현황</div>
            <Link href={SMARTR_ORIGIN_URL + "/memul/memulMgmt/memulReg"}>
              <Button size="lg" className="px-6">
                매물등록
                <svg>
                  <use
                    href="/icons/outlined/character.svg#Outlined/Character/plus"
                    width={16}
                    hanging={16}
                  />
                </svg>
              </Button>
            </Link>
          </h3>
          <ul className="flex w-full gap-x-3">
            <li className="flex-1">
              <PropertyStatusButton
                title="네이버 매물"
                count={propertyStatusData?.naverCnt}
              />
            </li>
            <li className="flex-1">
              <PropertyStatusButton
                title="R114 매물"
                count={propertyStatusData?.r114Cnt}
              />
            </li>
            <li className="flex-1">
              <PropertyStatusButton
                title="확인실패"
                count={propertyStatusData?.checkFailCnt}
              />
            </li>
            <li className="flex-1">
              <PropertyStatusButton
                title="등록실패"
                count={propertyStatusData?.regFailCnt}
              />
            </li>
            <li className="flex-1">
              <PropertyStatusButton
                title="노출종료"
                count={propertyStatusData?.endExposureCnt}
              />
            </li>
          </ul>
        </div>
        <div className={`max-desktop:hidden min-w-[375px] ${containerStyle}`}>
          <MemberInfo
            membershipLevel="정회원"
            name="알실장"
            contractPeriod={[new Date("2024-08-10"), new Date("2024-12-31")]}
            deposit={952284}
            couponCount={839}
            subscriptionProductName="네이버프리120"
            contractRenewalLink={`${SMARTR_ORIGIN_URL}${LANDING_URL_CONTRACT_RENEWAL}`}
            editUserinfoLink={`${SMARTR_ORIGIN_URL}${LANDING_URL_EDIT_USERINFO}`}
            homepageManagementLink={`${SMARTR_ORIGIN_URL}${LANDING_URL_HOMEPAGE_MANAGEMENT}`}
          />
        </div>
      </div>
      <Popup />
    </main>
  );
}
