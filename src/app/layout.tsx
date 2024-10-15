import type { Metadata } from "next";
import "./globals.css";
import MouseCursor from "@/components/mouseCursoe";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "NGR",
  description: "Nishan Gurung Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar/>
        {children}
        <MouseCursor/>
      </body>
    </html>
  );
}
