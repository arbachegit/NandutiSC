import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";

// Wordmark icons.ai (canon §18.1): cons/.ai = Plus Jakarta Sans (sans-bold);
// o "i" = Libre Baskerville RETO (NUNCA italico).
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-logo",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  variable: "--font-logo-i",
});

export const metadata: Metadata = {
  title: "Nanduti",
  description:
    "Portal ciudadano IA-first del Paraguay — 9 mini-apps, 28 herramientas, 5 idiomas.",
  metadataBase: new URL("https://iconsai.ai"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${jakarta.variable} ${libreBaskerville.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-ink-900 text-bone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
