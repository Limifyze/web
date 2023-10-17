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
        "Wir entwickeln neue Produkte für Hotels und Restaurants. Maximale Gästezufriedenheit mit effizientem Personaleinsatz ist unser Ziel. Daran arbeiten wir täglich gemeinsam mit unseren Kunden.",
      openGraph: {
        type: "website",
        locale: "de",
        url: "https://limifyze.com/de",
        title: "Limifyze",
        description:
          "Wir entwickeln neue Produkte für Hotels und Restaurants. Maximale Gästezufriedenheit mit effizientem Personaleinsatz ist unser Ziel. Daran arbeiten wir täglich gemeinsam mit unseren Kunden.",
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
        "We develop new products for hotels and restaurants. Maximum guest satisfaction with efficient staff deployment is our goal. We work on this every day together with our customers.",
      openGraph: {
        type: "website",
        locale: "en",
        url: "https://limifyze.com/en",
        title: "Limifyze",
        description:
          "We develop new products for hotels and restaurants. Maximum guest satisfaction with efficient staff deployment is our goal. We work on this every day together with our customers.",
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
