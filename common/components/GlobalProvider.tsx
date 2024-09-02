"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import ChannelIOScript from "./ChannelIOScript";
import Popup, { PopupProvider } from "./Popup";

function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

const client = new QueryClient({
  defaultOptions: {},
});

export default function GlobalProvier({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={client}>
      <AuthProvider>
        <PopupProvider>
          {children}
          <ChannelIOScript />
          <Popup landingPopup="등기부등본 자동 첨부" />
        </PopupProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
