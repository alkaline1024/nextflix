"use client";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import AppHeader from "./_components/AppHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-screen w-screen !overflow-x-hidden antialiased`}
        style={{ background: "#141414", color: "#fff" }}
      >
        <AppHeader />
        {children}
      </body>
    </html>
  );
}
