import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felice's Portfolio | Computer Science & Data Science",
  description: "Computer Science @ SBU | Data & ML Enthusiast | Builder of Things",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico", // reference your favicon here
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
