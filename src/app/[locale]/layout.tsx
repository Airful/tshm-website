import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";
import { locales, type Locale } from "@/app/lib/i18n";
import { getTranslations } from "@/app/lib/i18n";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin", "devanagari"],
  weight: ["400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tshm.co.in"),
  title: {
    default: "TSHM & TF - Tarakeswar School of Hotel Management & Technical Foundation",
    template: "%s | TSHM & TF - Tarakeswar",
  },
  description:
    "Tarakeswar School of Hotel Management & Technical Foundation — the leading vocational training institute in Tarakeswar, Hooghly, West Bengal. Offering Hotel Management, AC Technician Diploma, Beauty Academy, Spoken English, Online Degrees and more. 100% job assistance, stipend during training. No entrance exam required.",
  keywords:
    "TSHM, Tarakeswar, hotel management course Tarakeswar, vocational training Hooghly, AC technician course West Bengal, beauty academy Tarakeswar, spoken english course Hooghly, diploma hotel management West Bengal, technical foundation, placement, online degree",
  openGraph: {
    title: "TSHM & TF - Tarakeswar School of Hotel Management & Technical Foundation",
    description:
      "The leading vocational training institute in Tarakeswar, Hooghly. 100% job assistance, stipend during training. Our students are working around India & abroad.",
    url: "https://tshm.co.in",
    siteName: "TSHM & TF",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "TSHM & TF - Tarakeswar School of Hotel Management",
    description: "Vocational training in Hotel Management, AC Technician, Beauty Academy & more. 100% job assistance.",
  },
  alternates: {
    canonical: "https://tshm.co.in",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Tarakeswar School of Hotel Management & Technical Foundation",
  alternateName: "TSHM & TF",
  url: "https://tshm.co.in",
  telephone: "+919635964348",
  email: "tshm368@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "College Road, Padmapukur",
    addressLocality: "Tarakeswar",
    addressRegion: "West Bengal",
    postalCode: "712410",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.89,
    longitude: 88.02,
  },
  areaServed: [
    { "@type": "City", name: "Tarakeswar" },
    { "@type": "AdministrativeArea", name: "Hooghly" },
    { "@type": "State", name: "West Bengal" },
  ],
  sameAs: [],
  description:
    "Leading vocational training institute in Tarakeswar, Hooghly, West Bengal offering Hotel Management, AC Technician Diploma, Beauty Academy, Spoken English, Online Degrees and more. 100% job assistance with stipend during training.",
  foundingDate: "2018",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 12 },
  knowsAbout: [
    "Hotel Management",
    "AC Technician Training",
    "Beauty Academy",
    "Spoken English",
    "Career Counseling",
    "Online Degree Programs",
    "Vocational Training",
  ],
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tshm.co.in/#localbusiness",
  name: "TSHM & TF",
  image: "https://tshm.co.in/images/logo.jpeg",
  telephone: "+919635964348",
  email: "tshm368@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "College Road, Padmapukur",
    addressLocality: "Tarakeswar",
    addressRegion: "West Bengal",
    postalCode: "712410",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.89,
    longitude: 88.02,
  },
  url: "https://tshm.co.in",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const common = await getTranslations(locale as Locale, "common");
  const nav = common.nav as Record<string, string>;
  const footer = common.footer as Record<string, string>;
  const whatsapp = common.whatsapp as Record<string, string>;
  const logoTagline = common.logoTagline as string;

  return (
    <html lang={locale}>
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar locale={locale} nav={nav} logoTagline={logoTagline} />
        <main>{children}</main>
        <Footer locale={locale} nav={nav} footer={footer} />
        <WhatsAppButton message={whatsapp.message} ariaLabel={whatsapp.ariaLabel} />
      </body>
    </html>
  );
}
