import { Locale } from "@/middleware"
import Image from "next/image"

const translations = {
  de: {
    title: "Alles für den perfekten Drink",
    subheadline: "Was ist dabei?",
  },
  en: {
    title: "Everything for the perfect drink",
    subheadline: "What's included?",
  },
}

const features = [
  {
    name: { de: "24/7 Barkeeper.", en: "24/7 Barkeeper." },
    description: {
      de: "Das herzstück der Selfservice-Bar, für hygienischen Ausschank direkt aus der Originalflasche. Für kleinere Betriebe auch einzeln erhältlich.",
      en: "The heart of the self-service bar, for hygienic dispensing directly from the original bottle. Also available individually for smaller companies.",
    },
    icon: "/assets/icons/coffee_maker.svg",
  },
  {
    name: {
      de: "Funktionaler Unterschrank.",
      en: "Functional cabinet.",
    },
    description: {
      de: "In verschiedenen Dekors erhältlich und mühelos verschiebbar auf Rollen. Das Regal für die Trinkgläser und der Eiswürfelbereiter sind natürlich dabei!",
      en: "Available in different decors and easy to move on castors. The shelf for the drinking glasses and the ice cube maker are of course included!",
    },
    icon: "/assets/icons/table.svg",
  },
  {
    name: { de: "Post-Mix System.", en: "Post-Mix System." },
    description: {
      de: "Egal ob Fruchtsäfte oder Softdrinks, alles wird gekühlt und exakt ausgeschenkt.",
      en: "Whether fruit juices or soft drinks, everything is cooled and dispensed exactly.",
    },
    icon: "/assets/icons/water.svg",
  },
  {
    name: { de: "Comfort Service.", en: "Comfort Service." },
    description: {
      de: "Bezahlmodul, Grundreinigung alle 6 Monate, IoT-Anbindung und Servicetätigkeiten.",
      en: "Payment module, basic cleaning every 6 months, IoT connection and service activities.",
    },
    icon: "/assets/icons/hub.svg",
  },
]

export default function Content({ lang }: { lang: Locale }) {
  return (
    <div className="overflow-hidden bg-white mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-base font-semibold leading-7 text-primary-600">
          {translations[lang].title}
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {translations[lang].subheadline}
        </p>
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
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-primary-500 rounded-xl">
              <Image
                src="/assets/SSB_beschriftet.jpg"
                alt="SSB with Text"
                width={1500}
                height={1500}
                quality={100}
                className="bg-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
