import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingWidgets from "@/components/FloatingWidgets";

export const metadata: Metadata = {
  title: "Trusted Network | India's Trusted Business Social Networking Platform",
  description: "Connect with verified business owners, build meaningful relationships, exchange recommendations, and grow your professional network through a trusted business community.",
  icons: {
    icon: '/logo.png', // Using logo as favicon as requested
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollReveal />
        <FloatingWidgets />
        {children}
      </body>
    </html>
  );
}
