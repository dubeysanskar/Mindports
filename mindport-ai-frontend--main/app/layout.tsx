import type { Metadata } from "next";
import { Provider } from "./provider";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeModeScript } from "flowbite-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduPath AI",
  description:
    "EduPath AI is an online personalized learning platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
