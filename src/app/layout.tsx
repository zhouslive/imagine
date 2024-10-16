import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from '@clerk/nextjs'
// import Link from "next/link";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});


export const metadata: Metadata = {
  title: "Imagine",
  description: "Imagine is a platform for creating and sharing AI images.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
      <header className="flex justify-end p-4 gap-4" ></header>
          <main>{children}</main>
      </body>
    </html>
    </ClerkProvider>
  );
}
