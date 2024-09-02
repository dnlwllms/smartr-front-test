import { Button } from "@hdc-ui/react/components";

import ActualTransactionPriceChart from "@/common/components/ActualTransactionPriceChart";

import PropertyStatusButton from "@/common/components/PropertyStatusButton";

import PropertyCard from "@/common/components/PropertyCard";
import MemberInfo from "@/common/components/MemberInfo";

import { getListingStatus } from "@/common/network/r114/listing-status";
import Popup from "@/common/components/Popup";

export const revalidate = 10;

export default async function Page() {
  const { data: listingStatusData } = await getListingStatus({
    mode: "success-test",
  });

  const prevFirstDate = "2024.08.10";
  const prevLastDate = "2024.12.31";

  const firstDate = new Date(prevFirstDate.replace(/\./g, "-"));
  const lastDate = new Date(prevLastDate.replace(/\./g, "-"));

  return (
    <main>
      <h1>Desktop</h1>

      <div className="inline-block w-full p-8">
        <ActualTransactionPriceChart />
      </div>

      <h3 className="mb-8 flex items-center justify-between text-heading03b">
        <div className="flex items-center gap-x-0.5">매물현황</div>
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
      </h3>
      <ul className="flex w-full gap-x-3">
        <li className="flex-1">
          <PropertyStatusButton
            title="네이버 매물"
            count={listingStatusData?.naver}
          />
        </li>
        <li className="flex-1">
          <PropertyStatusButton
            title="R114 매물"
            count={listingStatusData?.r114}
          />
        </li>
        <li className="flex-1">
          <PropertyStatusButton
            title="확인실패"
            count={listingStatusData?.verificationFailed}
          />
        </li>
        <li className="flex-1">
          <PropertyStatusButton
            title="등록실패"
            count={listingStatusData?.registrationFailed}
          />
        </li>
        <li className="flex-1">
          <PropertyStatusButton
            title="노출종료"
            count={listingStatusData?.exposureEnd}
          />
        </li>
      </ul>
      <PropertyCard
        code="R2407221058095"
        date="2024.08.15 ~ 2024.09.14"
        complexType="아파트"
        address="서초 그랑자이 101동 1506호"
        dealType="매매"
        quote="23억 9,000"
      />
      <MemberInfo
        membershipLevel="정회원"
        name="알실장"
        contractPeriod={[firstDate, lastDate]}
        deposit={952284}
        couponCount={839}
        subscriptionProductName="네이버프리120"
      />
      <Popup landingPopup="등기부등본 자동 첨부" />
    </main>
  );
}
