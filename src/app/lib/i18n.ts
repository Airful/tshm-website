import { cache } from "react";

export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const getTranslations = cache(
  async (locale: Locale, namespace: string): Promise<Record<string, unknown>> => {
    try {
      const messages = (
        await import(`../../../messages/${locale}/${namespace}.json`)
      ).default;
      return messages;
    } catch {
      const messages = (
        await import(`../../../messages/en/${namespace}.json`)
      ).default;
      return messages;
    }
  }
);

export async function getPageTranslations(
  locale: Locale,
  namespaces: string[]
): Promise<Record<string, Record<string, unknown>>> {
  const results = await Promise.all(
    namespaces.map((ns) => getTranslations(locale, ns))
  );
  return Object.fromEntries(namespaces.map((ns, i) => [ns, results[i]]));
}

export function getCourseField<T>(
  course: Record<string, unknown>,
  field: string,
  locale: Locale
): T {
  if (locale === "bn") {
    const bnField = `${field}_bn`;
    if (course[bnField] !== undefined) return course[bnField] as T;
  }
  return course[field] as T;
}
