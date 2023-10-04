"use client";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Transtition } from "./components/Transition";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter;
  return (
    <html lang="en">
      <body className={sora.className}>
        <AnimatePresence mode="wait">
            <Transtition />
          <motion.div>
            <Nav />
            <Header />
            {children}
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
