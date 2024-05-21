import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Header from "@/components/inc/header";

export const metadata: Metadata = {
  title: "Dressys App",
  description: "Created by Indicatti's",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body className={`font-norms text-white bg-black`}>
            {children}
            </body>
    </html>
  );
}
