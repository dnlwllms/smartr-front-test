import { Metadata } from "next";

import localFont from "next/font/local";

import "../../../design-system/react/dist/hui-react-clients.min.css";
import "../../../design-system/react/dist/hui-react-components.min.css";
// import "@hdc-ui/react/clients-style";
// import "@hdc-ui/react/components-style";

import "@/common/global.css";

import GlobalProvier from "@/common/components/GlobalProvider";

export const pretendard = localFont({
  src: "../fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
});

export const metadata: Metadata = {};

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
