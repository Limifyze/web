import { Locale } from "@/middleware"
import Hero from "../../../components/development/Hero"
import Nav from "../../../components/home/Nav"
import Footer from "@/components/home/Footer"
import Clark from "@/components/development/Clark"
import HowWeWork from "@/components/development/HowWeWork"
import FromUs from "@/components/development/FromUs"
import ContactCTA from "@/components/home/ContactCTA"
import Team from "@/components/development/Team"

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
