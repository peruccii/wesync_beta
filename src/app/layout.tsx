import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { queryClient } from "@/lib/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import logo from "../../public/logo_wesync.png";
import NextAuthProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeSync",
  icons: { icon: logo.src },
  description: "Sync your musics all time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>
          <NextAuthProvider>{children}</NextAuthProvider>
        </body>
      </QueryClientProvider>
    </html>
  );
}
