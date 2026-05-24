const locales = ["en", "bn"] as const;

type Locale = (typeof locales)[number];

const legacySlugRedirects: Record<string, string> = {
  "": "",
  home: "",
  "about-us": "about",
  about: "about",
  "contact-us": "contact",
  contact: "contact",
  gallery: "gallery",
  "upcoming-project": "upcoming",
  upcoming: "upcoming",
  "our-courses": "courses",
  courses: "courses",
  faq: "faq",
  "hotel-management": "courses/hotel-management",
  "diploma-in-hotel-management": "courses/hotel-management",
  "career-counseling": "courses/career-counseling",
  "diploma-in-sales-and-marketing-management": "courses/sales-marketing",
  "sales-marketing": "courses/sales-marketing",
  "tshm-tf-make-up-beauty-tailoring-academy": "courses/beauty-tailoring-academy",
  "make-up-beauty-tailoring-academy": "courses/beauty-tailoring-academy",
  "beauty-tailoring-academy": "courses/beauty-tailoring-academy",
  "diploma-in-ac-technician-1-year": "courses/refrigerator-ac",
  "ac-technician": "courses/refrigerator-ac",
  "refrigerator-aircondition": "courses/refrigerator-ac",
  "computer-tally-gst-1year": "courses/cms-ed",
  "cms-ed": "courses/cms-ed",
  "diploma-in-hospital-management": "courses/health-assistant",
  "health-assistant": "courses/health-assistant",
  transformation: "courses/transformation",
  "on-line-courses-ba-b-com-b-sc-bba-mba-b-sc-in-hotel-management-and-many-more": "courses/online-degrees",
  "online-courses": "courses/online-degrees",
  "online-degrees": "courses/online-degrees",
  "cruise-line": "courses/hospitality-cruise-line",
  "tshm-tf-media-academy-in-association-with-crime-press-bengal": "courses",
};

function getLocale(value: string | undefined, fallbackLocale: string): Locale {
  if (value && locales.includes(value as Locale)) return value as Locale;
  if (locales.includes(fallbackLocale as Locale)) return fallbackLocale as Locale;
  return "en";
}

function normalizeSlug(slug: string | undefined) {
  if (!slug) return "";

  const decoded = (() => {
    try {
      return decodeURIComponent(slug);
    } catch {
      return slug;
    }
  })();

  return decoded
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function getLegacyParts(pathname: string, fallbackLocale: string) {
  const parts = pathname.split("/").filter(Boolean);
  const first = parts[0];

  if (first === "web") {
    return {
      locale: getLocale(undefined, fallbackLocale),
      slug: parts[2],
    };
  }

  if (locales.includes(first as Locale) && parts[1] === "web") {
    return {
      locale: getLocale(first, fallbackLocale),
      slug: parts[3],
    };
  }

  return null;
}

export function isLegacyWebPath(pathname: string) {
  return getLegacyParts(pathname, "en") !== null;
}

export function getLegacyRedirectPath(pathname: string, fallbackLocale: string) {
  const legacy = getLegacyParts(pathname, fallbackLocale);
  if (!legacy) return null;

  const target = legacySlugRedirects[normalizeSlug(legacy.slug)];
  if (target === undefined) return null;

  return target ? `/${legacy.locale}/${target}` : `/${legacy.locale}`;
}
