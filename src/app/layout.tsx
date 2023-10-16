import "./globals.css"
import type { Metadata, ResolvingMetadata } from "next"
import { Open_Sans } from "next/font/google"

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
  //@ts-ignore
  _,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
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
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }]
}

// @ts-ignore
export default function RootLayout({ children, params }) {
  return (
    <html>
      <body className={open_sans.className}>{children}</body>
    </html>
  )
}
