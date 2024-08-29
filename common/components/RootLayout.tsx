import localFont from "next/font/local";

import "@hdc-ui/react/clients-style";
import "@hdc-ui/react/components-style";

import "@/common/global.css";

import GlobalProvier from "@/common/components/GlobalProvider";

const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={pretendard.className}>
      <body>
        <GlobalProvier>{children}</GlobalProvier>
      </body>
    </html>
  );
}
