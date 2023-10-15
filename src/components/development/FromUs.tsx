import { Locale } from "@/middleware"
import Image from "next/image"

const translations = {
  de: {
    title: "Alles aus einer Hand.",
    subheadline: "Hard- & Software.<br />Made in Vorarlberg.",
    text: "Die Kombination aus Hard- & Software ermöglicht es uns Sie von der Ideenfindung bis zur Serienreife und darüber hinaus bestmöglich zu begleiten.",
  },
  en: {
    title: "Everything from one source.",
    subheadline: "Hard- & Software.<br />Made in Vorarlberg.",
    text: "The combination of hardware and software enables us to accompany you from the idea finding to the product-market-fit and beyond.",
  },
}

const features = [
  {
    name: { de: "Konstruktion", en: "Construction" },
  },
  {
    name: {
      de: "Applikationsentwicklung",
      en: "Application development",
    },
  },
  {
    name: {
      de: "3D Druck",
      en: "3D printing",
    },
  },
  {
    name: {
      de: "IoT-Plattform",
      en: "IoT platform",
    },
  },

  {
    name: {
      de: "Embedded",
      en: "Embedded",
    },
  },
  {
    name: {
      de: "Apps",
      en: "Apps",
    },
  },
  {
    name: {
      de: "Elektronik",
      en: "Electronics",
    },
  },
  {
    name: {
      de: "Assembling",
      en: "Assembling",
    },
  },
]

export default function FromUs({ lang }: { lang: Locale }) {
  return (
    <div className="overflow-visible bg-white mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
            <h2 className="text-base font-semibold leading-7 text-primary-600">
              {translations[lang].title}
            </h2>
            <p
              className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              dangerouslySetInnerHTML={{
                __html: translations[lang].subheadline,
              }}
            />
            <p
              className="mt-6 text-lg leading-8 text-gray-600"
              dangerouslySetInnerHTML={{ __html: translations[lang].text }}
            />
          </div>
          <div className="sm:px-6 lg:px-0 relative overflow-visible">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <dl className="mt-10 max-w-xl text-base leading-7 text-gray-600 lg:max-w-none sm:grid-cols-2 sm:grid">
                {features.map((feature) => (
                  <div key={feature.name[lang]} className="relative pl-9 mb-6">
                    <dt className="font-semibold text-gray-900">
                      <Image
                        src={"/assets/y2.svg"}
                        alt=""
                        className="absolute -left-1 h-8 w-8 text-primary-600"
                        width={150}
                        height={150}
                        quality={100}
                      />
                      {feature.name[lang]}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
