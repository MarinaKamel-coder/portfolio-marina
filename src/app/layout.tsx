import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marina Kamel | Software Developer Portfolio",
  description: "Professional portfolio of Marina Kamel, Full-Stack Software Developer specializing in web, mobile, and desktop software architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-background antialiased selection:bg-primary/20">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}