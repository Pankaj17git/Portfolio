import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F6F2",
};

export const metadata: Metadata = {
  title: "Pankaj Choudhary — Full-Stack Software Developer",
  description:
    "Early-career Full-Stack Software Developer with 1 year of professional experience building web applications with Next.js, Angular, Node.js, and Prisma + MySQL.",
  keywords: [
    "Pankaj Choudhary",
    "Full-Stack Developer",
    "Software Developer",
    "MERN Stack",
    "Next.js Developer",
    "Angular Developer",
    "Prisma MySQL",
    "React Developer",
    "Kaspro Solutions",
  ],
  authors: [{ name: "Pankaj Choudhary" }],
  openGraph: {
    title: "Pankaj Choudhary — Full-Stack Software Developer",
    description:
      "1 year of professional experience shipping features across the stack: Next.js, Angular, React, Node.js, Prisma & MySQL.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
