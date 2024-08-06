import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import { Sidebar } from "@/components/Shared/Sidebar/Sidebar";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} h-full flex p-2 gap-2`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
