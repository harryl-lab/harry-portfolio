import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://harry-luo.com"),
  title: "Harry Luo | Software & AI Engineering",
  description:
    "Harry Luo is a University of Michigan student interested in software and AI engineering, intelligent applications, and reliable software.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Harry Luo | Software & AI Engineering",
    description:
      "Explore Harry Luo's software projects, AI engineering experience, and technical interests.",
    url: "/",
    siteName: "Harry Luo",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Harry Luo | Software & AI Engineering",
    description:
      "Explore Harry Luo's software projects, AI engineering experience, and technical interests.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
