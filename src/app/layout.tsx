import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOGITHKUMAR K R | Software Engineer Portfolio",
  description: "Software Development Engineer with hands-on experience building and deploying full-stack applications integrated with AI and machine learning capabilities.",
};

import { ChatWidget } from "@/components/chatbot/chat-widget";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#f8fafc]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Navbar />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
