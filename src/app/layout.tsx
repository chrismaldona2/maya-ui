import "@/styles/global.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/layout/header";
import PageLayout from "@/components/layout/page-layout";
import Footer from "@/components/layout/footer";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maya UI",
  description:
    "Free and open-source animated components built with React, Typescript, Tailwind CSS, and Motion (previously Framer Motion).",
  icons: "/favicon.svg",
  robots: "index, follow",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("bg-background antialiased", geist.className)}>
        <Providers>
          <PageLayout>
            <Header />
            {children}
          </PageLayout>
          <Footer />
          <SpeedInsights />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
