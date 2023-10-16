import { Locale } from "@/middleware"
import "../globals.css"
import type { Metadata, ResolvingMetadata } from "next"
import { Open_Sans } from "next/font/google"
import Script from "next/script"

type Props = {
  params: { lang: Locale }
}
const open_sans = Open_Sans({ subsets: ["latin"] })

const additionalMetaTags: Metadata = {
  creator: "Limifyze GmbH",
  keywords:
    "Limifyze, LiMix, Gastronoy 4.0, IoT, Selfservice Bar, Automatic Barmixer, Automatischer Barkeeper, Barmixer Vorarlberg, Cocktail Machine, Cocktail Maschine",
  applicationName: "Limifyze",
  verification: {
    google: "V5VvS3Z1u52VRjar9BL0lMYHgiwTwF3a9sYpObpbdPw",
  },
  viewport: "width=device-width, initial-scale=1.0",
  authors: {
    name: "Limifyze GmbH",
  },
  appleWebApp: true,
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = params.lang
  if (lang == "de") {
    return {
      title: "Limifyze",
      description:
        "Wir wollen den Personalmangel langfristig und nachhaltig beenden und dabei eine angenehmere Arbeitsumgebung in der Hotellerie und Gastronomie schaffen. Genau daran arbeiten wir jeden Tag.",
      openGraph: {
        type: "website",
        locale: "de",
        url: "https://limifyze.com/de",
        title: "Limifyze",
        description:
          "Wir wollen den Personalmangel langfristig und nachhaltig beenden und dabei eine angenehmere Arbeitsumgebung in der Hotellerie und Gastronomie schaffen. Genau daran arbeiten wir jeden Tag.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fssb-01.jpg&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Selfservice Bar",
          },
        ],
      },
      ...additionalMetaTags,
    }
  } else
    return {
      title: "Limifyze",
      description:
        "We want to end the staff shortage in the long term and sustainably and at the same time create a more pleasant working environment in the hotel and gastronomy industry. That's exactly what we work on every day.",
      openGraph: {
        type: "website",
        locale: "en",
        url: "https://limifyze.com/en",
        title: "Limifyze",
        description:
          "We want to end the staff shortage in the long term and sustainably and at the same time create a more pleasant working environment in the hotel and gastronomy industry. That's exactly what we work on every day.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fssb-01.jpg&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Selfservice Bar",
          },
        ],
      },
      ...additionalMetaTags,
    }
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }]
}

// @ts-ignore
export default function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      {process.env.NODE_ENV !== "development" && (
        <Script
          async
          defer
          data-website-id="630b5936-08f9-4dce-be55-eeb499210757"
          src="https://umami.limifyze.com/umami.js"
        />
      )}
      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
