import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trusted Network | India's Trusted Business Social Networking Platform",
  description: "Connect with verified business owners, build meaningful relationships, exchange recommendations, and grow your professional network through a trusted business community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
