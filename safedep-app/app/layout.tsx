import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";
import "./globals.css";

const monaSans = localFont({
  src: "./fonts/Mona-Sans.woff2",
  display: "swap",
  variable: "--font-mona-sans",
});

export const metadata: Metadata = {
  title: "SafeDep Insights",
  description: "Open source package analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${monaSans.variable} font-sans antialiased bg-gray-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
