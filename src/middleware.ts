import Negotiator from "negotiator"
import { NextRequest } from "next/server"

export type Locale = "en" | "de"
export const locales: Locale[] = ["en", "de"]

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  let headers = request.headers
  let acceptLanguage =
    headers.get("accept-language") ?? "de-DE,de;q=0.9,en-US;q=0.8,en;q=0.7"
  let negotiator = new Negotiator({
    headers: {
      "accept-language": acceptLanguage,
    },
  })
  let locale = negotiator.language(locales)
  return locale
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return Response.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    "/",
    "/ssb",
    "/about",
    "/development",
    "/legal",
    "/privacy",
    "/blog",
    "/blog/:slug*",
  ],
}
