import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Chris Sloane | Home",
    template: "Chris Sloane | %s",
  },
  icons: {
    icon: "/images/signatures/Christopher-Sloane-Initials_black_high-res.png",
  },
  description: "Personal website of cvsloane",
  keywords: ["developer", "portfolio", "blog"],
  authors: [{ name: "cvsloane" }],
  creator: "cvsloane",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cvsloane.com",
    siteName: "cvsloane",
    title: "cvsloane",
    description: "Personal website of cvsloane",
  },
  twitter: {
    card: "summary_large_image",
    title: "cvsloane",
    description: "Personal website of cvsloane",
    creator: "@cvsloane",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
