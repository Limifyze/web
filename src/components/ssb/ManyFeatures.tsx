"use client"
import { Locale } from "@/middleware"
import Image from "next/image"
import { Fade } from "react-awesome-reveal"

const translations = {
  de: {
    headline: "Alles in einem",
    subhead: "Vielseitig einsetzbar",
    text: "Die Selfservice-Bar serviert Ihren Gästen rund um die Uhr frische Drinks in höchster Qualität.<br />Das System wurde von uns in Vorarlberg entwickelt und wird In-House produziert.",
  },
  en: {
    headline: "All in one",
    subhead: "Versatile",
    text: "The Selfservice Bar serves your guests fresh drinks around the clock in the highest quality.<br />The system was developed by us in Vorarlberg and is produced In-House.",
  },
}
const features = [
  {
    name: { de: "Selfservice.", en: "Self-service." },
    description: {
      de: "Ihre Gäste bedienen die Selfservice-Bar selbständig.Die Getränke werden automatisch ausgeschenkt und verkauft.",
      en: "Your guests serve themselves at the self-service bar. The drinks are automatically dispensed and sold.",
    },
    icon: "/assets/icons/group.svg",
  },
  {
    name: {
      de: "Nützlich von morgens bis abends.",
      en: "Useful from morning to evening.",
    },
    description: {
      de: "Verschieben Sie die Selfservice-Bar mühelos zwischen Frühstück, Hotel, Lounge und Barbereich.",
      en: "Move the self-service bar effortlessly between breakfast, hotel, lounge and bar area.",
    },
    icon: "/assets/icons/night.svg",
  },
  {
    name: { de: "Offener Ausschank.", en: "Open dispensing." },
    description: {
      de: "Die Getränke werden sichtbar aus der Original-Flasche ausgeschenkt. Perfekt für hochwertige Weine und Spirituosen.",
      en: "The drinks are visibly dispensed from the original bottle. Perfect for high-quality wines and spirits.",
    },
    icon: "/assets/icons/liquor.svg",
  },
]

export default function ManyFeatures({ lang }: { lang: Locale }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-5xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600">
            {translations[lang].headline}
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {translations[lang].subhead}
          </p>
          <p
            className="mt-6 text-lg leading-8 text-gray-600"
            dangerouslySetInnerHTML={{ __html: translations[lang].text }}
          />
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <Fade>
            <Image
              src="/assets/ssb-top.png"
              alt="Selfservice Bar"
              className="lg:max-w-3xl mx-auto object-contain max-w-full"
              width={1500}
              height={1500}
              quality={100}
            />
          </Fade>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name[lang]} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900 text-lg">
                <Image
                  src={feature.icon}
                  alt="Selfservice Bar"
                  className="absolute -left-5 -top-1 h-12 w-12 text-primary-600"
                  width={100}
                  height={100}
                  quality={100}
                />
                {feature.name[lang]}
                <br />
              </dt>
              <dd className="inline">{feature.description[lang]}</dd>
            </div>
          ))}
        </dl>
      </div>
      <Image
        src="/assets/broell_cc_004.jpg"
        alt="Selfservice Bar"
        className="w-full mx-auto object-contain max-w-7xl mt-32 xl:rounded-3xl"
        width={1500}
        height={1500}
        quality={100}
      />
    </div>
  )
}
