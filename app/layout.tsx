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
      <body className="min-h-full bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
