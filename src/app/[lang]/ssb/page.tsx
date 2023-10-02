import { Locale } from "@/middleware"
import { DevWithLimifyze } from "../../../components/home/DevWithLimifyze"
import Hero from "../../../components/ssb/Hero"
import Ledovation_Prev from "../../../components/home/Ledovation_Prev"
import Nav from "../../../components/home/Nav"
import OurProducts from "../../../components/home/OurProducts"
import SSB_Prev from "../../../components/home/SSB_Prev"
import ContactCTA from "@/components/home/ContactCTA"
import Footer from "@/components/home/Footer"

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
      <ContactCTA lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
