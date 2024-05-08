import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

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
        <ToastContainer
        draggable 
        position="top-center"
        closeOnClick
        hideProgressBar
        theme="colored"/>
        <body className={`font-poppins`}>{children}</body>
    </html>
  );
}
