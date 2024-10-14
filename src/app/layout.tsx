import type { Metadata } from "next";

import "./globals.css";

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
      <body className={``}>{children}</body>
    </html>
  );
}
