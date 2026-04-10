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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Larnel J Hight',
    url: 'https://larnelhight.com',
    jobTitle: ['Senior Information Security Engineer', 'Founder'],
    worksFor: {
      '@type': 'Organization',
      name: 'Render Defense',
    },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'CISSP' },
      { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'AIGP (in progress)' },
    ],
    knowsAbout: [
      'AI Governance',
      'Enterprise Architecture',
      'NIST AI RMF',
      'Cloud Security',
      'Adversarial ML',
      'Zero Trust',
      'Technology Risk',
    ],
    description: '25 years of security leadership, enterprise architecture, and AI governance.',
    sameAs: ['https://linkedin.com/in/larnelhight'],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
