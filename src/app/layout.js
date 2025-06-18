import { Mulish } from 'next/font/google'
import "./globals.css";
import GoogleTag from '@/components/GoogleTag';
// import MainModal from '@/components/MainModal';
// import Script from 'next/script';
// import { Head } from 'next/document';
// import Head from 'next/head';
// import Script from 'next/script';


export const metadata = {
  title: "FF Tool",
  description: "Twinnet",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: 0,
}


// If loading a variable font, you don't need to specify the font weight
const mulish = Mulish({ subsets: ["latin"], preload: false, variable: '--font-mulish' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head> */}

      {/* <Head>
        <Script
          async
          custom-element="amp-ad"
          src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"
          strategy="afterInteractive" // Ensures it loads after hydration
        />
      </Head> */}

      <body
        className={`${mulish.className} bg-[url('/Ff_BG.png')] bg-fixed bg-no-repeat bg-cover bg-bottom md:w-[375px] md:mx-auto`}
      >
        <GoogleTag />
        {children}
        {/* <section className="bg-[url('/Ff_BG.png')] bg-no-repeat bg-cover bg-bottom h-screen overflow-y-auto w-full">
          {children}
        </section> */}
      </body>
    </html>
  );
}
