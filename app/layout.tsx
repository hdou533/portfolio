import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { poppins } from "./fonts";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    "Sally Dou | Software Developer | Frontend Specialist | UX Design Enthusiast",
  description: "Welcome to Sally's Portfoio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <div className="w-full min-h-screen bg-background text-white flex flex-col justify-start items-center ">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
