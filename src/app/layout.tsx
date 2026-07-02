import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CUET Islamic Ilm Seeker Society | CIISS",
  description:
    "The CUET Islamic Ilm Seeker Society (CIISS) is a student-led spiritual and intellectual platform at Chittagong University of Engineering and Technology, fostering Islamic values alongside engineering excellence.",
  keywords: [
    "CUET",
    "Islamic Society",
    "Ilm Seeker",
    "CIISS",
    "Islamic Mahfil",
    "Chittagong University of Engineering and Technology",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <body>
        <Navbar />
        <main style={{ paddingTop: "var(--nav-height)" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
