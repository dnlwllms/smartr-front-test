import Popup from "@/common/components/Popup";
import Inquiry from "@/common/components/Inquiry";

import ExposureEnd from "../components/ExposureEnd";
import NoticeClient from "../components/NoticeClient";
import UserinfoClient from "../components/UserInfoClient";
import QuotationStatus from "../components/QuotationStatus";
import PropertyStatusList from "../components/PropertyStatusList";

import { REMOTE_CONTROL_URL } from "../constants";

export default async function Page() {
  const containerStyle =
    "flex flex-col rounded-3xl border-solid border-gray-200 p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] gap-y-10";

  return (
    <main>
      <div className="m-auto flex min-w-[1200px] items-start justify-center gap-6 p-6">
        <div className={`${containerStyle} w-full`}>
          <PropertyStatusList />
          <ExposureEnd />
          <QuotationStatus />
        </div>
        <div
          className={`flex min-w-[375px] flex-col gap-y-10 rounded-3xl border-solid border-gray-200 p-6 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.15)] max-desktop:hidden`}
        >
          <UserinfoClient />
          <NoticeClient />
          <Inquiry remoteControlUrl={REMOTE_CONTROL_URL} />
        </div>
      </div>

      <Popup />
    </main>
  );
}
