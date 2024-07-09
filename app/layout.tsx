import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movie Ticket",
  description: "Esta es una app para tickets de peliculas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
