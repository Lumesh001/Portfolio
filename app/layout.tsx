import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import MainBackgroundComponent from "@/components/common/BackgroundComponent";
import Navbar from "@/components/common/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lumesh Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <MainBackgroundComponent />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
