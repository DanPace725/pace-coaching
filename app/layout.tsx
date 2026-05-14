import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Friction Point Coaching",
  description: "Coaching that helps you read friction as signal, follow the pattern, and decide what to hold or rewrite.",
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
