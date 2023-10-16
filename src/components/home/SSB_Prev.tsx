import { Locale } from "@/middleware"
import Image from "next/image"
import Link from "next/link"

const translations = {
  de: {
    LimSelf: "Limifyze Selfservice-Bar",
    in30Sec: "In 30 Sekunden zum Lieblingsgetränk",
    thisSystem: "Dieses System ermöglicht es dem Betreiber",
    withOneFill:
      "mit nur einer einzigen Füllung, ohne Personal bis zu 150 Cocktails",
    or: "oder 300 Shots an seine Gäste zu verkaufen.",
    theSelfserviceBar:
      "Die SELFSERVICE-BAR ist ein vollautomatisches Getränke-Mix-, Ausschank- und Vending-System, mit dem der Gast nach Barschluss oder auch untertags in gut frequentierten Bereichen ohne Bar-Mitarbeiter selbst einen Cocktail mixen und per Kreditkarte oder Handy bezahlen kann.",
    cta: "Zur Selfservice-Bar",
  },
  en: {
    LimSelf: "Limifyze Selfservice-Bar",
    in30Sec: "In 30 seconds to your favorite drink",
    thisSystem: "This system allows the operator",
    withOneFill:
      "to sell up to 150 cocktails or 300 shots to his guests with just one filling, without personnel.",
    or: "",
    theSelfserviceBar:
      "The SELFSERVICE-BAR is a fully automatic drink mixing, dispensing and vending system that allows the guest to mix a cocktail himself after closing time or during the day in well-frequented areas without bar staff and pay by credit card or mobile phone.",
    cta: "To the self-service bar",
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

export default function SSB_Prev({ lang }: { lang: Locale }) {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-500">
                  {translations[lang].LimSelf}
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {translations[lang].in30Sec}
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {translations[lang].thisSystem}{" "}
                  <strong>{translations[lang].withOneFill} </strong>
                  {translations[lang].or}
                  <br />
                  <br />
                  {translations[lang].theSelfserviceBar}
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    href={"/" + lang + "/ssb"}
                    className="rounded-md bg-primary-500 px-8 py-2.5 font-semibold shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  >
                    {translations[lang].cta}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                src="/assets/ssb-top.png"
                alt="SSB Top View"
                className="rounded-xl object-contain"
                width={1500}
                height={1500}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name[lang]} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        {/* <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        /> */}
                        <Image
                          src={feature.icon}
                          alt=""
                          className="absolute left-1 top-1 h-5 w-5 text-primary-600"
                          width={50}
                          height={50}
                          quality={100}
                        />
                        {feature.name[lang]}
                      </dt>{" "}
                      <dd className="inline">{feature.description[lang]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-primary-500 rounded-xl">
                <Image
                  src="/assets/ssb-happy.jpg"
                  alt="Happy SSB"
                  width={1920}
                  height={1080}
                  className="bg-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
