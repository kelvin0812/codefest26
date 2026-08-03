import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "UTP CodeFest '26",
  description: "CodeFest '26 is our flagship intervarsity coding competition organized under the theme \"Innovating for the People, by the People\". This initiative serves as a high-impact platform for university students across Malaysia to sharpen their technical expertise by developing a website or app that addresses specific societal challenges. Participants will also have the opportunity to engage directly with industry leaders in fields such as artificial intelligence, software engineering, and cybersecurity through corporate exhibitions and specialized workshops.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
