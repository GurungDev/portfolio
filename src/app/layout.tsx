import type { Metadata } from "next";
import "./globals.css";
import MouseCursor from "@/components/mouseCursoe";
import Navbar from "@/components/navbar";
import FooterComp from "@/components/footer";
import 'lenis/dist/lenis.css'

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
    <html lang="en" >
     

      <body className={``}>
        <Navbar/>
        {children}
        <MouseCursor/>
        <FooterComp/>
      </body>
    </html>
  );
}
