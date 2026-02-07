"use client";

import { usePathname } from "next/navigation";
import Navigation from "./components/navigation";
import { Footer } from "./home-page/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = pathname === "/login";

  return (
    <>
      {!hideLayout && <Navigation />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
