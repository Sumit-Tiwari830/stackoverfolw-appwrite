import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Import your custom Header and Footer components
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flowson | Ask Anything, Know Everything",
  description: "A general question and answer community for curious minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-neutral-950 text-neutral-50 flex flex-col antialiased`}>

        {/* 2. Render your Header component */}
        <Header />

        {/* Main Content (This renders page.tsx) */}
        <main className="flex-1 flex flex-col mt-24">
          {children}
        </main>

        {/* 3. Render your Footer component */}
        <Footer />

      </body>
    </html>
  );
}