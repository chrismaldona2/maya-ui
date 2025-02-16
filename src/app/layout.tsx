import "@/styles/global.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/layout/header";
import PageLayout from "@/components/layout/page-layout";
import Footer from "@/components/layout/footer";

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
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="bg-white dark:bg-neutral-950 ">
        <Providers>
          <PageLayout>
            <Header />
            {children}
          </PageLayout>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
