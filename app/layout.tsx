import "./globals.css"
import { GoogleAnalytics } from "@next/third-parties/google"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

import Footer from "./components/footer"
import Header from "./components/header"
import { GOOGLE } from "./utils/constants"

export const metadata: Metadata = {
  openGraph: {
    title: "mjki.dev",
    description:
      "Hello! I'm Myungjin Ki. I'm a software engineer based in Seoul, South Korea.",
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
}

const cx = (...classNames: string[]) => classNames.filter(Boolean).join(" ")

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
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
        className={cx(
          "min-w-dvw mx-auto min-h-dvh bg-white text-black antialiased lg:max-w-5xl dark:bg-gray-900 dark:text-white",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <Header />
        <main className="p-8">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={GOOGLE.ANALYTICS} />
      </body>
    </html>
  )
}
