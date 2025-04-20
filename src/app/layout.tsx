import type { Metadata } from "next";
import { GeistSans } from 'geist/font';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ThemeProvider } from 'next-themes';
import CustomCursor from './components/CustomCursor';

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
