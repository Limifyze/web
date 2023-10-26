import { Locale } from "@/middleware"

const tranlsations = {
  de: {
    ourProds: "Smarte Produkte.",
    for: "Für die Zukunft der Gastlichkeit.",
    weWant: "Wir entwickeln neue Produkte für Hotels und Restaurants.",
    and: "Maximale Gästezufriedenheit mit effizientem Personaleinsatz ist unser Ziel. Daran arbeiten wir täglich gemeinsam mit unseren Kunden.",
    as: "Als Entwickler und Hersteller von Automatisierungs- und IoT-Produkten ist es unser Ziel, mit modernen Technologien innovative Produkte zu entwickeln und zu produzieren.",
  },
  en: {
    ourProds: "Smart Products.",
    for: "For the future of hospitality.",
    weWant:
      "We develop new products for hotels and restaurants.",
    and: "Maximum guest satisfaction with efficient staff deployment is our goal. We work on this every day together with our customers.",
    as: "As a developer and manufacturer of automation and IoT products, our goal is to develop and produce innovative products through modern technologies.",
  },
}

export default function OurProducts({ lang }: { lang: Locale }) {
  return (
    <div className="mt-24">
      <div className="bg-gray-900 mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:px-8 rounded-3xl">
        <h2 className="text-3xl font-bold text-gray-200 sm:text-4xl">
          <span className="text-primary-400">
            {tranlsations[lang].ourProds}
          </span>
          <br />
          {tranlsations[lang].for}
        </h2>
        <p className="text-gray-200 mt-4 max-w-2xl">
          <strong>{tranlsations[lang].weWant} </strong> {tranlsations[lang].and}
          <br />
          <br />
          {tranlsations[lang].as}
        </p>
      </div>
    </div>
  )
}
