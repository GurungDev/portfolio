import type { Metadata } from "next";
import "./globals.css";
import MouseCursor from "@/components/mouseCursoe";
import Navbar from "@/components/navbar";
import FooterComp from "@/components/footer";
import "lenis/dist/lenis.css";

export const metadata: Metadata = {
  title: "NGR - Portfolio Website for Web Development and DevOps Services",
  description:
    "Nishan Gurung provides web development and DevOps services. Check out my portfolio and get in touch with me for any project inquiries.",
  keywords: ["web development", "devops", "portfolio", "Nishan Gurung"],
  authors: [{ name: "Nishan Gurung", url: "https://www.nishangurung.com.np" }],
  creator: "Nishan Gurung",
  openGraph: {
    title: "NGR - Portfolio Website for Web Development and DevOps Services",
    description:
      "Nishan Gurung provides web development and DevOps services. Check out my portfolio and get in touch with me for any project inquiries.",
    url: "https://www.nishangurung.com.np",
    siteName: "NGR",
    images: [
      {
        url: "https://www.nishangurung.com.np/images/logo.png",
        width: 800,
        height: 600,
        alt: "NGR Logo",
      },
    ],
  },
  twitter: {
    title: "NGR - Portfolio Website for Web Development and DevOps Services",
    description:
      "Nishan Gurung provides web development and DevOps services. Check out my portfolio and get in touch with me for any project inquiries.",
    card: "summary_large_image",
    creator: "@nishangurung",
    creatorId: "nishangurung",
    images: ["https://www.nishangurung.com.np/images/logo.png"],},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="b5tZyOsAjuu6H0cOTd_kHbMaEsT2ilMmn_jfTv4LzQo"
      />

      <body className={``}>
        <Navbar />
        {children}
        <MouseCursor />
        <FooterComp />
      </body>
    </html>
  );
}
