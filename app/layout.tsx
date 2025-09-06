import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Zinza Garlic Sauce | Premium Garlic Sauce from Windsor, Ontario',
  description: 'Our garlic sauce elevates any dish to a 5 star flavor and never disappoints. Premium garlic sauce made with fresh peeled garlic, perfect for dipping, spreading, and mixing.',
  keywords: 'garlic sauce, premium condiment, Windsor Ontario, restaurant supplier, gourmet sauce, spicy garlic, food service',
  authors: [{ name: 'Zinza Garlic Sauce' }],
  openGraph: {
    title: 'Zinza Garlic Sauce | Premium Garlic Sauce',
    description: 'Our garlic sauce elevates any dish to a 5 star flavor and never disappoints',
    type: 'website',
    locale: 'en_CA',
    siteName: 'Zinza Garlic Sauce'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}