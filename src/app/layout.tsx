import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AppProvider from "./lib/provider/AppProvider";
import ReactQueryProvider from "./lib/provider/ReactQueryProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Digital Humanities",
  description: "Digital Humanities data visualization",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReactQueryProvider>
          <AppProvider>{children}</AppProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
