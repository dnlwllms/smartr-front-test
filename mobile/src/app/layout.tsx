import Image from "next/image";

import RootLayout from "@/common/components/RootLayout";

import Navigation from "@/src/components/Navigation";

import logo from "../../public/logo.svg";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      <header className="sticky top-0 z-[1000] flex h-14 w-full items-center bg-white pl-6 pr-3">
        <h1>
          <Image src={logo} width={92} height={36} alt="스마트알 로고" />
        </h1>
      </header>
      <main className="min-h-[100dvh]">{children}</main>
      <Navigation />
    </RootLayout>
  );
}
