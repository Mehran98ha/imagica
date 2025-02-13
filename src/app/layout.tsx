import '@/assets/app.css';
import { BackToTop } from '@/components/(app)/back-to-top';
import { BottomNavigation } from '@/components/(app)/bottom-navigation';
import { Footer } from '@/components/(app)/footer';
import { Header } from '@/components/(app)/header';
import Providers from '@/components/providers';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

const font = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '900'],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={font.className} suppressHydrationWarning>
      <head>
        <link rel="theme-color" href="#14B8A6" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </head>
      <body>
        <Providers>
          <Header />
          <main className="container">
            <div className="p-4">{children}</div>
          </main>
          <Footer />
          {/* <BottomNavigation /> */}
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
