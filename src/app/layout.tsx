import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "./session-provider";
import { getServerSession } from "next-auth";
import { Footer } from "./footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <div className="min-h-screen mb-[140px]">{children}</div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
