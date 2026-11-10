import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { profile } from "@/content";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: profile.title,
  description: profile.summary,
  openGraph: {
    title: profile.title,
    description: profile.summary,
    type: "website",
    // TODO: add a screenshot of the hero at public/og.png and uncomment:
    // images: ["/og.png"],
  },
};

// Applies a saved theme before first paint so there's no flash.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={plexMono.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
