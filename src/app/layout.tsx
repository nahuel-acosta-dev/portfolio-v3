import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import Preloader from "@/ui/PreLoader";

export const metadata: Metadata = {
  title: "Nahuel Acosta | Portfolio",
  description: "Desarrollador Fullstack",
};

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bebas.variable} ${poppins.variable} bg-darkbg text-white`}
      >
        <Preloader />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
