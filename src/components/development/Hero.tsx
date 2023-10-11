"use client"
import { Locale } from "@/middleware"
import Image from "next/image"

const tranlsations = {
  de: {
    title: "Smarte Produkte.",
    title2: "Entwickelt und",
    title3: "Hergestellt in Österreich",
  },
  en: {
    title: "Smart products.",
    title2: "Developed and",
    title3: "manufactured in Austria",
  },
}

export default function Hero({ lang }: { lang: Locale }) {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-white to-primary-200 pt-12">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 lg:py-40 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="mt-auto lg:col-span-4">
            <h1 className="text-2xl font-black text-gray-900 sm:text-3xl">
              {tranlsations[lang].title}
              <br />
              {tranlsations[lang].title2}
              <br />
              {tranlsations[lang].title3}
            </h1>
          </div>
          <div className="mx-auto mt-16 flex sm:mt-24 lg:mr-0 lg:mt-0 lg:col-span-8">
            <div className="max-w-3xl sm:max-w-5xl w-full">
              <Image
                src="/assets/linus_michael.jpg"
                alt="Linus Albrecht, Michael Bertel"
                width={1920}
                height={1080}
                className="rounded-xl shadow-2xl object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
