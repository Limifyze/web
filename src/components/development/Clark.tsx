import { Locale } from "@/middleware"

const tranlsations = {
  de: {
    ourProds: "3. Clarksche Gesetz",
    text: "Jede hinreichend fortschrittliche ",
    text2: "Technologie ist von Magie nicht zu unterscheiden.",
    our: "Unter diesem Motto entwickeln wir unsere Produkte.",
  },
  en: {
    ourProds: "3. Clarke's Law",
    text: "Any sufficiently advanced ",
    text2: "technology is indistinguishable from magic.",
    our: "We develop our products under this motto.",
  },
}

export default function Clark({ lang }: { lang: Locale }) {
  return (
    <div className="mt-24">
      <div className="bg-gray-900 mx-auto max-w-7xl px-6 py-16 sm:py-16 lg:px-8 rounded-3xl">
        <h2 className="text-primary-400 text-xl mb-3">
          {tranlsations[lang].ourProds}
        </h2>
        <p className="text-3xl font-bold text-gray-200 sm:text-4xl max-w-5xl">
          {tranlsations[lang].text}{" "}
          <span className="text-primary-400">{tranlsations[lang].text2}</span>
        </p>
        <p className="text-gray-200 mt-4 max-w-2xl">{tranlsations[lang].our}</p>
      </div>
    </div>
  )
}
