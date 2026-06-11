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
    "Agente educacional infanto-juvenil — guarani, portugues e espanhol.",
  metadataBase: new URL("https://iconsai.ai"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${libreBaskerville.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="bg-ink-900 text-bone-100 antialiased">
        {children}
      </body>
    </html>
  );
}
