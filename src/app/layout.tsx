import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import { ModalProvider } from "@/components/ui/modal/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "暗号掲示板",
  description: "暗号しか投稿できない匿名掲示板",
  openGraph: {
    images: [{
      url: `${process.env.URL}/OGP.png`,
    }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="google-site-verification" content="v6dluDHubcxdQKY9G4ydqo2rDMV7ROrJgpK5k_SUuMw" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-stone-750 text-white`}
      >
        <ModalProvider>
          <Header />
          <main className="pt-10 pb-14">
            {children}
          </main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
