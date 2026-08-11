import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsentBanner } from '@/components/ConsentBanner';
import { AdSenseScript } from '@/components/AdComponents';
import { AntigravityCanvas } from '@/components/AntigravityCanvas';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'VictorMedia — Free, Fast & Useful Online Tools',
  description: 'VictorMedia provides free, fast, private, and high-performance online calculators, converters, developer tools, text utilities, and generators.',
  keywords: ['online tools', 'free calculator', 'word counter', 'json formatter', 'qr code generator', 'unit converter', 'bmi calculator', 'victormedia'],
  authors: [{ name: 'VictorMedia' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://victor-media.vercel.app'),
  openGraph: {
    title: 'VictorMedia — Free, Fast & Useful Online Tools',
    description: '100% free, private browser-processed calculators, converters, text tools, and developer utilities.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://victor-media.vercel.app',
    siteName: 'VictorMedia',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VictorMedia — Free Online Tools',
    description: 'Fast, browser-based online tools for calculators, text manipulation, image compression, and developer utilities.',
  },
  other: {
    'google-adsense-account': 'ca-pub-6751037211810646',
    'google-site-verification': 'PhqDCraPVcuNOgwktVSw2azc0jZV8jK2I4HSxFUygCE',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Site Verifications requested by user */}
        <meta name="google-site-verification" content="PhqDCraPVcuNOgwktVSw2azc0jZV8jK2I4HSxFUygCE" />
        <meta name="google-site-verification" content="yx7XXamhrRy4FPgwBk81RZh5LxER7ZiGEevGymoWmQU" />
        
        {/* Google AdSense Account meta tag */}
        <meta name="google-adsense-account" content="ca-pub-6751037211810646" />
        
        {/* Google AdSense Script */}
        <Script
          id="adsense-global"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6751037211810646"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Tag Manager Container Snippet */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W83V5S5M');`}
        </Script>

        {/* Google Analytics gtag.js */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VMED1008080"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VMED1008080');
          `}
        </Script>

        <AdSenseScript />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W83V5S5M"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <ThemeProvider>
          {/* Ambient Antigravity background */}
          <div className="antigravity-bg">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
          </div>
          <AntigravityCanvas />

          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
            <Header />
            <main style={{ flex: 1 }}>{children}</main>
            <Footer />
            <ConsentBanner />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
