import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vinay Alavala Portfolio",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="qrqMKXHY7-3iZVaIxU8pwP3AEBzT9mX3BtW-67YB9Iw" />
        <link rel="icon" href="/resume.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
