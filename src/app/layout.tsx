import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar/NavBar";
import Preloader from "@/ui/PreLoader";
import { initI18nServer } from "@/lib/i18n/server";
import { languages, fallbackLng } from "@/lib/i18n/config";

export const metadata: Metadata = {
  title: "Nahuel Acosta | Portfolio",
  description: "Desarrollador Fullstack",
  icons: {
    icon: "/favicon.svg",
  },
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

export default async function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  const currentLng = languages.includes(lng) ? lng : fallbackLng;

  // 1) Inicializás i18n en el server con el locale correcto
  const i18n = await initI18nServer(currentLng, ["translation"]);

  // 2) Extraés el "snapshot" de recursos para hidratar el cliente
  const resources = i18n.services.resourceStore.data;
  const initial = JSON.stringify({ lng: currentLng, resources });
  return (
    <html lang={currentLng} suppressHydrationWarning>
      <head>
        {/* snapshot embebido para el cliente */}
        <script
          id="__I18N_SNAPSHOT__"
          type="application/json"
          dangerouslySetInnerHTML={{ __html: initial }}
        />
      </head>
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
