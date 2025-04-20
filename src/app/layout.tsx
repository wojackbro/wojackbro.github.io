import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from 'geist/font';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abid Hossain | Portfolio",
  description: "Personal portfolio of Abid Hossain, showcasing projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
