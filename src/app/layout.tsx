import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/theme';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ConsentBanner } from '@/components/ConsentBanner';
import { AdSenseScript } from '@/components/AdComponents';

export const metadata: Metadata = {
  title: 'VictorMdeia — Free, Fast & Useful Online Tools',
  description: 'VictorMdeia provides free, fast, private, and high-performance online calculators, converters, developer tools, text utilities, and generators.',
  keywords: ['online tools', 'free calculator', 'word counter', 'json formatter', 'qr code generator', 'unit converter', 'bmi calculator'],
  authors: [{ name: 'VictorMdeia' }],
  metadataBase: new URL('https://victormdeia.net'),
  openGraph: {
    title: 'VictorMdeia — Free, Fast & Useful Online Tools',
    description: '100% free, private browser-processed calculators, converters, text tools, and developer utilities.',
    url: 'https://victormdeia.net',
    siteName: 'VictorMdeia',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VictorMdeia — Free Online Tools',
    description: 'Fast, browser-based online tools for calculators, text manipulation, image compression, and developer utilities.',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
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
        <AdSenseScript />
      </head>
      <body>
        <ThemeProvider>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
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
