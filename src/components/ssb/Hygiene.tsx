import { Locale } from "@/middleware"
import Image from "next/image"

const translations = {
  de: {
    title: "Hygiene by Design",
    text: "Spezielle Magnetventile ermöglichen den Ausschank von Getränken direkt aus der Originalflasche.<br /><br />Die Flaschen werden im Automat gekühlt und verschlossen gelagert. Durch die einstellbare LED-Beleuchtung und das großzügige Sichtfenster werden die Flaschen im Innenraum effektvoll in Szene gesetzt.<br /><br />Geschmacksveränderungen sind ausgeschlossen, da jedes Getränk nur durch die Schwerkraft ausgeschenkt wird und nie durch einen Schlauch oder eine Pumpe fließt.",
  },
  en: {
    title: "Hygiene by Design",
    text: "Special solenoid valves enable beverages to be dispensed directly from the original bottle.<br /><br />The bottles are stored cooled and sealed in the vending machine. The adjustable LED lighting and the generous viewing window effectively showcase the bottles inside.<br /><br />Changes in taste are ruled out, as each drink is dispensed by gravity alone and never flows through a tube or pump.",
  },
}

export default function Hygiene({ lang }: { lang: Locale }) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {translations[lang].title}
              </h2>
              <p
                className="mt-6 text-lg leading-8 text-gray-600"
                dangerouslySetInnerHTML={{ __html: translations[lang].text }}
              ></p>
            </div>
          </div>
          <div className="flex">
            <Image
              src="/assets/ssb-01.jpg"
              alt="SSB"
              className="rounded-xl object-cover"
              width={1920}
              height={1080}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
