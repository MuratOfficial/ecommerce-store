"use client";
import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Navbar from "@/components/navbar";

import ContactBar from "@/components/contact-bar";
import { useEffect } from "react";
import ToastProvider from "@/providers/toaster";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Store",
  description: "Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    (async () => {
      const { default: LocomotiveScroll } = await import("locomotive-scroll");
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <Navbar />

        {children}
        <ContactBar />
        <Footer />
      </body>
    </html>
  );
}
