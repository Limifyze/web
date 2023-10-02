"use client"
import { Locale } from "@/middleware"
import Image from "next/image"

const tranlsations = {
  de: {
    drinks: "Getränke.",
    aroundTheClock: "Rund um die Uhr.",
    withoutPersonnel: "Ohne Personal.",
  },
  en: {
    drinks: "Drinks.",
    aroundTheClock: "Around the clock.",
    withoutPersonnel: "Without personnel.",
  },
}

export default function Hero({ lang }: { lang: Locale }) {
  return (
    <>
      <div className="h-full sm:min-h-[56em] min-h-[100vh] max-w-[100vw] relative sm:max-h-none">
        <div className="lg:bg-[url(/_next/image?url=%2Fassets%2Fenjoy.jpg&w=1920&q=80)] bg-[url(/_next/image?url=%2Fassets%2Ffinal.jpg&w=1080&q=90)] bg-cover bg-center absolute top-0 w-full h-full" />
        <div className="absolute inset-0 bg-white opacity-60" />
        <div className="absolute overflow-hidden pt-12 w-full h-full">
          <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 lg:py-40 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 relative h-full flex">
            <div className="mt-auto lg:col-span-4">
              <h1 className="text-3xl font-black text-gray-900 sm:text-4xl">
                {tranlsations[lang].drinks}
                <br />
                {tranlsations[lang].aroundTheClock}
                <br />
                {tranlsations[lang].withoutPersonnel}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
