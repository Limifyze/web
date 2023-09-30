import { Locale } from "@/middleware"
import { DevWithLimifyze } from "../../components/DevWithLimifyze"
import Hero from "../../components/Hero"
import Ledovation_Prev from "../../components/Ledovation_Prev"
import Nav from "../../components/Nav"
import OurProducts from "../../components/OurProducts"
import SSB_Prev from "../../components/SSB_Prev"
import ContactCTA from "@/components/ContactCTA"
import Footer from "@/components/Footer"

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
      <OurProducts lang={lang} />
      <SSB_Prev lang={lang} />
      <Ledovation_Prev lang={lang} />
      <DevWithLimifyze lang={lang} />
      <ContactCTA lang={lang} />
      <Footer lang={lang} />
    </main>
  )
}
