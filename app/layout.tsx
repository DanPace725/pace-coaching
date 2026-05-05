import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pace Coaching",
  description: "For the millions of us who hold it all together and still go invisible. Let's make the patterns visible.",
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
