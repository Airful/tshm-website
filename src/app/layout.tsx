import "./globals.css";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
