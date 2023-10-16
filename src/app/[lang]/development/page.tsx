import { Locale } from "@/middleware"
import Hero from "../../../components/development/Hero"
import Nav from "../../../components/home/Nav"
import Footer from "@/components/home/Footer"
import Clark from "@/components/development/Clark"
import HowWeWork from "@/components/development/HowWeWork"
import FromUs from "@/components/development/FromUs"
import ContactCTA from "@/components/home/ContactCTA"
import Team from "@/components/development/Team"
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
      title: "Produktentwicklung | Limifyze",
      description:
        "Limifyze ist Entwickler und Hersteller von smarten IoT-Produkten aus Vorarlberg.",
      openGraph: {
        type: "website",
        locale: "de",
        url: "https://limifyze.com/de/development",
        title: "Limifyze",
        description:
          "Limifyze ist Entwickler und Hersteller von smarten IoT-Produkten aus Vorarlberg.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Flinus_michael.jpg&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Team",
          },
        ],
      },
    }
  } else
    return {
      title: "Product-Development | Limifyze",
      description:
        "Limifyze is developer and manufacturer of smart IoT-products from Vorarlberg.",
      openGraph: {
        type: "website",
        locale: "en",
        url: "https://limifyze.com/en/development",
        title: "Limifyze",
        description:
          "Limifyze is developer and manufacturer of smart IoT-products from Vorarlberg.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Flinus_michael.jpg&w=1920&q=90",
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
      <Clark lang={lang} />
      <HowWeWork lang={lang} />
      <FromUs lang={lang} />
      <ContactCTA lang={lang} />
      <Team lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
