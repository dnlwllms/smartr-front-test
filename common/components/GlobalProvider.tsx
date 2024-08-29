"use client";

import { QueryClient, QueryClientProvider } from "react-query";

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
      <AuthProvider>{children}</AuthProvider>
    </QueryClientProvider>
  );
}
