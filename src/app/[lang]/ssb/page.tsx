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

export default function Home({
  params: { lang },
}: {
  params: {
    lang: Locale
  }
}) {
  return (
    <main className="bg-white">
      <Nav lang={lang} />
      <Hero lang={lang} />
      <ManyFeatures lang={lang} />
      <Functionality lang={lang} />
      <Parallax />
      <Content lang={lang} />
      <Video />
      <Dekors lang={lang} />
      <Hygiene lang={lang} />
      <ContactCTA lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
