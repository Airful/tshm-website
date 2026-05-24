import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getLegacyRedirectPath, isLegacyWebPath } from "./app/lib/legacy-routes";

const locales = ["en", "bn"] as const;
type Locale = (typeof locales)[number];
const defaultLocale: Locale = "en";

function getLocaleFromHeaders(request: NextRequest): Locale {
  const acceptLang = request.headers.get("Accept-Language");
  if (!acceptLang) return defaultLocale;

  const preferred = acceptLang
    .split(",")
    .map((lang) => {
      const [code, q] = lang.trim().split(";q=");
      return {
        code: code.split("-")[0].toLowerCase(),
        q: q ? parseFloat(q) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const { code } of preferred) {
    if ((locales as readonly string[]).includes(code)) return code as Locale;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = getLocaleFromHeaders(request);

  const legacyRedirectPath = getLegacyRedirectPath(pathname, locale);
  if (legacyRedirectPath) {
    const url = request.nextUrl.clone();
    url.pathname = legacyRedirectPath;
    url.search = "";
    return NextResponse.redirect(url, 308);
  }

  if (isLegacyWebPath(pathname)) {
    return new NextResponse(null, { status: 410 });
  }

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next|api|images|fonts|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
