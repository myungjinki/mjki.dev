import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  openGraph: {
    title: "mjki.dev",
    description: "Hello! I'm Myungjin Ki. I'm a software engineer based in Seoul, South Korea.",
    url: "https://mjki.dev",
    siteName: "mjki.dev",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "https://mjki.dev/_next/image?url=%2Fimages%2Fprofile-1.jpg&w=640&q=75",
        width: 400,
        height: 400,
        alt: "mjki.dev",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          key="theme-script"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-w-dvw min-h-dvh text-black bg-white dark:text-white dark:bg-gray-900 lg:max-w-5xl mx-auto`}
      >
        <Header />
        <main className="p-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
