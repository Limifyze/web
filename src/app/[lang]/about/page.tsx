import { Locale } from "@/middleware"
import Hero from "../../../components/about/Hero"
import Nav from "../../../components/home/Nav"
import Footer from "@/components/home/Footer"
import Team from "@/components/about/Team"
import Contact from "@/components/about/Contact"
import { Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { lang: Locale }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = params.lang
  if (lang == "de") {
    return {
      title: "Über Uns | Limifyze",
      description:
        "Limifyze ist Entwickler und Hersteller von smarten Produkten für die Gastronomie aus Alberschwende in Vorarlberg.",
      openGraph: {
        type: "website",
        locale: "de",
        url: "https://limifyze.com/de/about",
        title: "Limifyze",
        description:
          "Limifyze ist Entwickler und Hersteller von smarten Produkten für die Gastronomie aus Alberschwende in Vorarlberg.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fteam.jpg&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Team",
          },
        ],
      },
    }
  } else
    return {
      title: "About Us | Limifyze",
      description:
        "Limifyze is a developer and manufacturer of smart products from Alberschwende in Vorarlberg.",
      openGraph: {
        type: "website",
        locale: "en",
        url: "https://limifyze.com/en/about",
        title: "Limifyze",
        description:
          "Limifyze is a developer and manufacturer of smart products from Alberschwende in Vorarlberg.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fteam.jpg&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Team",
          },
        ],
      },
    }
}

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "de" }]
}

export default function Home({
  params: { lang },
}: {
  params: {
    lang: Locale
  }
}) {
  return (
    <main className="bg-white overflow-x-hidden">
      <Nav lang={lang} />
      <Hero lang={lang} />
      <Team lang={lang} />
      <Contact locale={lang} />
      <Footer lang={lang} />
    </main>
  )
}
