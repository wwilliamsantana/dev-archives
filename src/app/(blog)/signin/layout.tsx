import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "../globals.css";

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ADMIN",
  description: "ADMIN",
};


export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${robotoCondensed.variable} antialiased font-[family-name:--font-roboto-condensed]`}>
        {children}
      </body>
    </html>
  )
}