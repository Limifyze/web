import { Locale } from "@/middleware"
import Hero from "../../../components/development/Hero"
import Nav from "../../../components/home/Nav"
import Footer from "@/components/home/Footer"
import Clark from "@/components/development/Clark"

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
      <Footer lang={lang} />
    </main>
  )
}
