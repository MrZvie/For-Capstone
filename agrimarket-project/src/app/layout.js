import { Roboto } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const roboto = Roboto({ subsets: ["latin"], weight: ['400','500','700'] });

export const metadata = {
  title: "AgriMarket | <3",
  description: "Generated by create next app and develop by mrzvie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/agricart.ico" />
      </head>
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto p-4">
          {children}
          </main>
      </body>
    </html>
  );
}