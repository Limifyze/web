"use client"
import { Locale } from "@/middleware"
import Image from "next/image"
import Link from "next/link"

const tranlsations = {
  de: {
    drinks: "Getränke.",
    aroundTheClock: "Rund um die Uhr.",
    withoutPersonnel: "Ohne Personal.",
    cta: "Zur Selfservice-Bar",
  },
  en: {
    drinks: "Drinks.",
    aroundTheClock: "Around the clock.",
    withoutPersonnel: "Without personnel.",
    cta: "To the self-service bar",
  },
}

export default function Hero({ lang }: { lang: Locale }) {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-white to-primary-200 pt-12">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 lg:py-40 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="mt-auto lg:col-span-4">
            <h1 className="text-2xl font-black text-gray-900 sm:text-4xl">
              {tranlsations[lang].drinks}
              <br />
              {tranlsations[lang].aroundTheClock}
              <br />
              {tranlsations[lang].withoutPersonnel}
            </h1>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/ssb"
                className="rounded-md bg-primary-500 px-8 py-2.5 font-semibold text-color shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
              >
                {tranlsations[lang].cta}
              </Link>
            </div>
          </div>
          <div className="mx-auto mt-16 flex sm:mt-24 lg:mr-0 lg:mt-0 lg:col-span-8">
            <div className="max-w-3xl sm:max-w-5xl w-full">
              <Image
                src="/assets/ssb-01.jpg"
                alt="Limifyze Selfservice-Bar"
                width={1920}
                height={1080}
                className="rounded-xl shadow-2xl"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
