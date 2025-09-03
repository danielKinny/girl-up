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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="GirlUp, EquALL, girls empowerment, gender equality, women, leadership, education, advocacy, youth, nonprofit, cambridge, school, dubai" />
        <meta name="author" content="GirlUp EquALL" />
        <meta property="og:title" content="GirlUp EquALL" />
        <meta property="og:description" content="Empowering girls to achieve equality" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/girlup.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GirlUp EquALL" />
        <meta name="twitter:description" content="Empowering girls to achieve equality" />
        <meta name="twitter:image" content="/girlup.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ptSerifCaption.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
