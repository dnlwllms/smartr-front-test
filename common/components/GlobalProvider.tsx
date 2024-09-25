"use client";

import { createContext } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import r114Request from "../network/r114/request";
import { User } from "../network/r114/user";

import ChannelIOScript from "./ChannelIOScript";
import { PopupProvider } from "./Popup";

export const AuthContext = createContext<{ user: User | null }>({
  user: null,
});

function AuthProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data } = useQuery("user", () => r114Request("/users"));

  return (
    <AuthContext.Provider value={{ user: data?.body }}>
      {children}
    </AuthContext.Provider>
  );
}

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
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
        </PopupProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
