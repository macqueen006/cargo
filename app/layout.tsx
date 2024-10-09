import type { Metadata } from "next";
import React from "react";
// import localFont from "next/font/local";
import "./globals.css";
import { Sarabun, Inter } from "next/font/google";
import BackToTop from "@/components/BackToTop";
import TopBanner from "@/components/navigators/TopBanner";
import SidebarDrawer from "@/components/SidebarDrawer";
import {DrawerProvider} from "./context/DrawerContext";

const sarabun = Sarabun({
  subsets: ["latin"],
  style: "normal",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: 'swap',
  variable: '--font-sarabun',
});

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${sarabun.variable} ${inter.variable} font-sarabun antialiased`}>
      <DrawerProvider>
        <TopBanner />
        {children}
        <BackToTop />
        <SidebarDrawer  />
      </DrawerProvider>
      </body>
    </html>
  );
}
