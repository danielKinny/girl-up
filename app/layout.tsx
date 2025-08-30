import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSerifCaption = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/pt-serif-caption/files/pt-serif-caption-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/pt-serif-caption/files/pt-serif-caption-latin-400-italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-pt-serif-caption",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GirlUp EquALL",
  description: "Empowering girls to achieve equality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className={`${geistSans.variable} ${geistMono.variable} ${ptSerifCaption.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
