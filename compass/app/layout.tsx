import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./output.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Compass community card",
  description: "Залуус өөрсдийн тодорхойлсон зорилгынхоо төлөө хөдөлмөрлөж байгаа энэ үед өдөр тутмын амьдралд нь, боловсролд нь, хүрээлэлд нь хөтөч болох Compass Community Card",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-golos" x-data="{selectedCard: null}">{children}</body>
    </html>
  );
}
