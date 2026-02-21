import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TSHM & TF - Tarakeswar School of Hotel Management & Technical Foundation",
  description:
    "Tarakeswar School of Hotel Management & Technical Foundation provides practical and purposeful education with professional training. 100% job assistance, stipend during training. Hotel Management, AC Technician, Beauty Academy, Spoken English, Online Degrees and more.",
  keywords:
    "TSHM, Tarakeswar, hotel management, technical foundation, vocational training, AC technician, beauty academy, online degree, placement, Hooghly",
  openGraph: {
    title: "TSHM & TF - Tarakeswar School of Hotel Management & Technical Foundation",
    description:
      "Practical and purposeful education with professional training. 100% placement opportunity. Our students are working around India & abroad.",
    url: "https://tshm.co.in",
    siteName: "TSHM & TF",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
