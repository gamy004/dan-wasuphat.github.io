import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Software Engineer Portfolio",
  description: "Professional portfolio of a Software Engineer specializing in modern web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaCode.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-hidden`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full bg-background">
          <div className="absolute top-0 right-[-20%] h-[500px] w-[500px] rounded-full bg-accent/20 blur-[100px]" />
          <div className="absolute bottom-0 left-[-20%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[100px]" />
        </div>
        <Header />
        <main className="flex-1 relative pt-16 pb-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
