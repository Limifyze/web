"use client"
import { useRef, useEffect } from "react"
import { Locale } from "@/middleware"
import Hero from "../../../components/about/Hero"
import Nav from "../../../components/home/Nav"
import Footer from "@/components/home/Footer"
import Team from "@/components/about/Team"
import Contact from "@/components/about/Contact"

export default function Home({
  params: { lang },
}: {
  params: {
    lang: Locale
  }
}) {
  const contact = useRef<HTMLDivElement>(null)

  const onScroll = (to: string) => {
    if (!contact.current) return

    if (to === "contact") {
      contact.current.scrollIntoView({
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const reference = window.location.href.split("#")[1]
    if (reference && reference.length > 0) {
      onScroll(reference)
    }
  }, [])

  return (
    <main className="bg-white overflow-x-hidden">
      <Nav lang={lang} />
      <Hero lang={lang} />
      <Team lang={lang} />
      <div ref={contact}>
        <Contact locale={lang} />
      </div>
      <Footer lang={lang} />
    </main>
  )
}
