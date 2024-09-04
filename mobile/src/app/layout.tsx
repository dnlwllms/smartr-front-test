import RootLayout from "@/common/components/RootLayout";

import Navigation from "@/src/components/Navigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <RootLayout>
      {children}
      <Navigation />
    </RootLayout>
  );
}
