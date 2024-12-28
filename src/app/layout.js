import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "next-themes";
import ThemeComponent from "./components/ThemeComponent";
import { ThemeModeScript } from "flowbite-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog",
  description: "A simple blog application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ThemeModeScript />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider attribute={"class"}>
            <Header />
            {children}
            <ThemeComponent />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
