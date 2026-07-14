import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friction Point | Coaching and consulting for recurring friction",
  description: "Make one recurring stuck pattern legible and build the smallest useful structure that restores movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500;1,600&family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full bg-white text-ink">
        {children}
      </body>
    </html>
  );
}
