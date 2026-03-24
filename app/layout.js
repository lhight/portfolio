import './globals.css';

export const metadata = {
  title: 'Larnel J Hight — AI Governance & Security Leadership',
  description:
    '25 years of security leadership, enterprise architecture, and AI governance. CISSP. Building governance structures that make innovation safe at enterprise scale.',
  metadataBase: new URL('https://larneljhight.com'),
  openGraph: {
    title: 'Larnel J Hight — AI Governance & Security Leadership',
    description:
      '25 years of security leadership, enterprise architecture, and AI governance.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Larnel J Hight — AI Governance & Security Leadership',
    description:
      '25 years of security leadership, enterprise architecture, and AI governance.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
