import { Locale } from "@/middleware"
import Hero from "../../../components/ssb/Hero"
import Nav from "../../../components/home/Nav"
import ContactCTA from "@/components/home/ContactCTA"
import Footer from "@/components/home/Footer"
import ManyFeatures from "@/components/ssb/ManyFeatures"
import Functionality from "@/components/ssb/Functionality"
import Parallax from "@/components/ssb/Parallax"
import Content from "@/components/ssb/Content"
import Video from "@/components/ssb/Video"
import Dekors from "@/components/ssb/Dekors"
import Hygiene from "@/components/ssb/Hygiene"
import IoT from "@/components/ssb/IoT"
import { Metadata, ResolvingMetadata } from "next"
import FAQ from "@/components/ssb/FAQ"

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
      title: "Selfservice-Bar | Limifyze",
      description:
        "Die Selfservice-Bar serviert Ihren Gästen rund um die Uhr frische Drinks in höchster Qualität. Das System wurde von uns in Vorarlberg entwickelt und wird In-House produziert.",
      openGraph: {
        type: "website",
        locale: "de",
        url: "https://limifyze.com/de/ssb",
        title: "Limifyze",
        description:
          "Die Selfservice-Bar serviert Ihren Gästen rund um die Uhr frische Drinks in höchster Qualität. Das System wurde von uns in Vorarlberg entwickelt und wird In-House produziert.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fssb-01.jpg&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Selfservice-Bar",
          },
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fdekor-3.png&w=1080&q=100",
            width: 1080,
            height: 1080,
            alt: "Limifyze Selfservice-Bar",
          },
        ],
      },
    }
  } else
    return {
      title: "Selfservice-Bar | Limifyze",
      description:
        "The Selfservice Bar serves your guests fresh drinks around the clock in the highest quality. The system was developed by us in Vorarlberg and is produced In-House.",
      openGraph: {
        type: "website",
        locale: "en",
        url: "https://limifyze.com/en/ssb",
        title: "Limifyze",
        description:
          "The Selfservice Bar serves your guests fresh drinks around the clock in the highest quality. The system was developed by us in Vorarlberg and is produced In-House.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fssb-01.jpg&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Selfservice-Bar",
          },
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fdekor-3.png&w=1080&q=100",
            width: 1080,
            height: 1080,
            alt: "Limifyze Selfservice-Bar",
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
      <ManyFeatures lang={lang} />
      <Functionality lang={lang} />
      <Parallax />
      <Content lang={lang} />
      <Video />
      <Dekors lang={lang} />
      <Hygiene lang={lang} />
      <IoT lang={lang} />
      <ContactCTA lang={lang} />
      <FAQ lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
