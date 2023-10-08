import { Locale } from "@/middleware"
import Image from "next/image"

const translations = {
  de: {
    title: "Alles im Griff.",
    subheadline: "IoT / Telemetrie",
    text: "Behalten Sie alles im Blick dank der <strong>Limifyze IoT Applikation</strong> und profitieren Sie immer von unseren neuesten Entwicklungen dank unser <strong>Over the Air Updates</strong>.",
  },
  en: {
    title: "Everything Connected.",
    subheadline: "IoT / Telemetry",
    text: "Keep everything in view thanks to the <strong>Limifyze IoT application</strong> and always benefit from our latest developments thanks to our <strong>Over the Air Updates</strong>.",
  },
}

const features = [
  {
    name: { de: "Verkaufsübersicht.", en: "Sales overview." },
    description: {
      de: "Behalten Sie Ihre Verkäufe im Überblick und optimieren Sie die Getränkekarte auf die Wünsche Ihrer Gäste.",
      en: "Keep track of your sales and optimize your drinks menu to suit your guests' needs.",
    },
    icon: "/assets/icons/dashboard.svg",
  },
  {
    name: {
      de: "Füllstandsüberwachung.",
      en: "Filling level monitoring.",
    },
    description: {
      de: "Sie werden informiert, wenn eine Nachfüllung erforderlich ist.",
      en: "You will be informed when a refill is required.",
    },
    icon: "/assets/icons/battery.svg",
  },
  {
    name: { de: "Administration.", en: "Administration." },
    description: {
      de: "Administrieren Sie die Getränke, Preise und Beschreibungen direkt am Smartphone oder PC.",
      en: "Administer the drinks, prices and descriptions directly on your smartphone or PC.",
    },
    icon: "/assets/icons/battery.svg",
  },
]

export default function IoT({ lang }: { lang: Locale }) {
  return (
    <div className="overflow-visible bg-white mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-primary-600">
          {translations[lang].title}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {translations[lang].subheadline}
        </p>
        <p
          className="mt-6 text-lg leading-8 text-gray-600"
          dangerouslySetInnerHTML={{ __html: translations[lang].text }}
        />
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
                        className="absolute -left-1 h-8 w-8 text-primary-600"
                        width={150}
                        height={150}
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
          <div className="sm:px-6 lg:px-0 relative overflow-visible">
            <div className="relative isolate overflow-hidden bg-primary-500 rounded-xl">
              <Image
                src="/assets/everything.jpg"
                alt="SSB in a Room"
                width={1500}
                height={1500}
                quality={100}
                className="bg-gray-800"
              />
            </div>
            <Image
              src="/assets/app.png"
              alt="App"
              width={170}
              height={800}
              quality={100}
              className="absolute right-0 rotate-[8deg] -bottom-[50px] object-contain max-w-[25vw] shadow-xl rounded-xl border-2 border-black bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
