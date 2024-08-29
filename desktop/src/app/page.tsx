import { Button } from "@hdc-ui/react/components";

import ActualTransactionPriceChart from "@/common/components/ActualTransactionPriceChart";
import { getListingStatus } from "@/common/network/r114/listing-status";

export const revalidate = 10;

export default async function Page() {
  const { data: listingStatusData } = await getListingStatus({
    mode: "success-test",
  });

  return (
    <main>
      <h1>Desktop</h1>
      <div>
        네이버 매물:
        {listingStatusData?.naver}
      </div>
      <div>
        R114 매물:
        {listingStatusData?.r114}
      </div>
      <div>
        확인실패:
        {listingStatusData?.verificationFailed}
      </div>
      <div>
        등록실패:
        {listingStatusData?.registrationFailed}
      </div>
      <div>
        노출종료:
        {listingStatusData?.exposureEnd}
      </div>
      <Button>Button</Button>
      <div className="inline-block w-full p-8">
        <ActualTransactionPriceChart />
      </div>
       
    </main>
  );
}
