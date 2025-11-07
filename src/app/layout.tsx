import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "./components/Loader";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "TIM-D MEDICAL | Specijalistički pregledi, Laboratorijske analize, Ultrazvuk | Leskovac",
  description: "Specijalistički pregledi, kompletne laboratorijske analize, ultrazvučna dijagnostika i patronažna služba sa kućnim lečenjem u Leskovcu. Profesionalna medicinska usluga na Prvomajskoj 71.",
  keywords: [
    "specijalistički pregledi",
    "laboratorijske analize",
    "ultrazvučna dijagnostika",
    "patronažna služba",
    "kućno lečenje",
    "medicinske usluge",
    "TIM-D MEDICAL",
    "Leskovac medicinske usluge",
    "lekarski pregledi",
    "dijagnostika",
    "zdravstvena zaštita",
    "medicina Leskovac"
  ],
  authors: [{ name: "TIM-D MEDICAL" }],
  creator: "TIM-D MEDICAL",
  publisher: "TIM-D MEDICAL",
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
  openGraph: {
    title: "TIM-D MEDICAL | Specijalistički pregledi, Laboratorijske analize, Ultrazvuk | Leskovac",
    description: "Specijalistički pregledi, kompletne laboratorijske analize, ultrazvučna dijagnostika i patronažna služba sa kućnim lečenjem u Leskovcu.",
            url: "https://www.timdmedical.rs",
    siteName: "TIM-D MEDICAL",
    images: [
      {
        url: "https://www.timdmedical.rs/tim-d-medical-logo.jpg",
        width: 1200,
        height: 630,
        alt: "TIM-D MEDICAL - Specijalistički pregledi i medicinske usluge",
        type: "image/jpeg",
      },
    ],
    locale: "sr_RS",
    type: "website",
    countryName: "Srbija",
  },
  twitter: {
    card: "summary_large_image",
    title: "TIM-D MEDICAL | Specijalistički pregledi, Laboratorijske analize, Ultrazvuk | Leskovac",
    description: "Specijalistički pregledi, kompletne laboratorijske analize, ultrazvučna dijagnostika i patronažna služba sa kućnim lečenjem u Leskovcu.",
          images: ["https://www.timdmedical.rs/tim-d-medical-logo.jpg"],
    creator: "@ordinacije_timd_medical",
  },
  alternates: {
          canonical: "https://www.timdmedical.rs",
  },
  category: "Health & Medical Services",
  classification: "Medical Services & Healthcare",
  other: {
    "geo.region": "RS",
    "geo.placename": "Leskovac, Srbija",
    "DC.title": "TIM-D MEDICAL - Specijalistički pregledi, Laboratorijske analize, Ultrazvuk | Leskovac",
    "DC.creator": "TIM-D MEDICAL",
    "DC.subject": "specijalistički pregledi, laboratorijske analize, ultrazvučna dijagnostika, patronažna služba, kućno lečenje, medicinske usluge, Leskovac",
    "DC.description": "Specijalistički pregledi, kompletne laboratorijske analize, ultrazvučna dijagnostika i patronažna služba sa kućnim lečenjem u Leskovcu.",
    "DC.publisher": "TIM-D MEDICAL",
    "DC.contributor": "TIM-D MEDICAL",
    "DC.date": "2025",
    "DC.type": "Text",
    "DC.format": "text/html",
            "DC.identifier": "https://www.timdmedical.rs",
    "DC.language": "sr",
    "DC.coverage": "Leskovac, Srbija",
    "DC.rights": "Copyright 2025 TIM-D MEDICAL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TIM-D MEDICAL" />
        <meta name="application-name" content="TIM-D MEDICAL" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data for Nutrition Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "TIM-D MEDICAL",
              "description": "Specijalistički pregledi, kompletne laboratorijske analize, ultrazvučna dijagnostika i patronažna služba sa kućnim lečenjem u Leskovcu.",
              "url": "https://www.timdmedical.rs",
              "telephone": ["+381638003388", "+38116644154"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Prvomajska 71",
                "addressLocality": "Leskovac",
                "addressRegion": "Jablanica",
                "postalCode": "16000",
                "addressCountry": "RS"
              },
              "priceRange": "$$",
              "serviceType": [
                "Specijalistički pregledi",
                "Laboratorijske analize",
                "Ultrazvučna dijagnostika",
                "Patronažna služba",
                "Kućno lečenje"
              ],
              "availableService": [
                {
                  "@type": "MedicalProcedure",
                  "name": "Specijalistički pregledi",
                  "description": "Profesionalni specijalistički pregledi od strane iskusnih lekara"
                },
                {
                  "@type": "MedicalTest",
                  "name": "Kompletne laboratorijske analize",
                  "description": "Širok spektar laboratorijskih analiza za dijagnostiku"
                },
                {
                  "@type": "MedicalProcedure",
                  "name": "Ultrazvučna dijagnostika",
                  "description": "Moderna ultrazvučna dijagnostika za preciznu dijagnozu"
                },
                {
                  "@type": "MedicalService",
                  "name": "Patronažna služba sa kućnim lečenjem",
                  "description": "Profesionalna patronažna služba sa mogućnošću kućnog lečenja"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/ordinacije_timd_medical/"
              ],
              "image": "https://www.timdmedical.rs/tim-d-medical-logo.jpg"
            })
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <Loader />
        {children}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          style={{
            fontFamily: 'Montserrat, sans-serif'
          }}
        />
      </body>
    </html>
  );
}
