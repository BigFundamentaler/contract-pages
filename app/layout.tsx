'use client';
import { Geist, Geist_Mono } from "next/font/google";
import dynamic from 'next/dynamic'
// 动态导入，禁用 SSR
const Web3Provider = dynamic(
  () => import('@/components/providers/web3-provider').then(mod => ({ default: mod.Web3Provider })),
  { ssr: false }
)
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
