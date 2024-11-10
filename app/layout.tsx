import "./globals.css";
import { Nunito } from 'next/font/google'

import type { Metadata } from "next";

const nunito = Nunito({
  weight: ['500', '600', '700'],
  subsets: ['latin']
})

// tags <meta> e muito mais do que viria numa <head>
export const metadata: Metadata = {
  title: "PiuPiwer",
  description: "Envie e leia pius!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${nunito.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
