import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Project MythCraft",
  description: "The ultimate survival experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header></Header>
        <main className="min-h-screen bg-[#020203] text-foreground selection:bg-primary/30 w-full flex flex-col items-center pt-16">
          {children}
        </main>
        <Footer />
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
