import type { Metadata } from "next";
import { headers } from "next/headers";
import "@fontsource-variable/manrope";
import "@fontsource/barlow-condensed/600.css";
import "@fontsource/barlow-condensed/700.css";
import "@fontsource/barlow-condensed/800.css";
import "@fontsource/barlow-condensed/900.css";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const baseUrl = new URL(`${protocol}://${host}`);
  const title = "Gabriel Personal | Personal Presencial e Consultoria Online";
  const description = "Personal trainer presencial e consultoria online com treino personalizado, suporte próximo e evolução constante. Fale com Gabriel Personal.";

  return {
    metadataBase: baseUrl,
    title,
    description,
    keywords: ["personal trainer", "consultoria online", "personal presencial", "treino personalizado", "emagrecimento", "hipertrofia"],
    alternates: { canonical: "/" },
    icons: {
      icon: [{ url: "/favicon.png", type: "image/png", sizes: "512x512" }],
      shortcut: "/favicon.png",
      apple: [{ url: "/favicon.png", sizes: "512x512", type: "image/png" }],
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      images: [{ url: new URL("/og-orange.png", baseUrl).toString(), width: 1200, height: 630, alt: "Gabriel Personal — transformação com acompanhamento profissional" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og-orange.png", baseUrl).toString()],
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
