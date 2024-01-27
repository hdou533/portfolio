"use client";
import "./globals.css";
import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { poppins } from "./fonts";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setShowBackToTop(false);
      const height = 600;
      const isPastHeight = window.scrollY > height;

      if (isPastHeight) {
        setShowBackToTop(true);
      }
    };
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />

        <div className="w-full min-h-screen bg-background text-white flex flex-col justify-start items-center ">
          {children}

          {showBackToTop && (
            <Link
              href="#header"
              className="transition-all ease-in-out  border w-8 h-8 flex flex-col justify-center items-center text-sm rounded-full fixed right-2 bottom-14 sm:right-8 sm:bottom-8 hover:border-secondary hover:shadow-secondary/50 shadow-lg hover:text-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            </Link>
          )}
        </div>

        <Footer />
      </body>
    </html>
  );
}
