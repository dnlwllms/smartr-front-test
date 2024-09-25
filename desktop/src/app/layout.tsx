import { Metadata } from "next";

import Footer from "../components/Footer";
import Navigation from "@/src/components/Navigation";
import RootLayout from "@/common/components/RootLayout";
import TrackingScripts from "@/common/components/TrackingScripts";

export const metadata: Metadata = {
  title: "스마트R",
  description:
    "smartr을 통해 중개사무소의 경쟁력을 키워보세요! 부동산114의 중개지원 서비스인 smartr은 네이버 부동산 매물 전송, 일정관리 등 공인중개사에게 필요한 서비스를 제공 하고 있습니다. 최저의 가격으로 최고의 서비스를 만나보세요",
  keywords:
    "smartR, 스마트알, 스마트R, 부동산광고, 매물광고, 네이버부동산 매물광고, 회원관리, 고개관리, 부동산개업, 부동산창업",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      <Navigation />
      {children}
      <Footer />
      {/* TODO: GA 스트림 생성 및 아이디 추가 */}
      <TrackingScripts gaId="" />
    </RootLayout>
  );
}
