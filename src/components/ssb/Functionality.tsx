"use client"
import { Locale } from "@/middleware"
import Image from "next/image"
import BackgroundY from "../BackgroundY"
import { Fade } from "react-awesome-reveal"

const translations = {
  de: {
    title: "In 30 Sekunden zum Lieblingsgetränk",
    youtube: "_fSSHZuYGR8",
  },
  en: {
    title: "In 30 seconds to your favorite drink",
    youtube: "lElMXcp79pQ",
  },
}

const functionalites = [
  {
    number: "01",
    title: { de: "Getränk wählen", en: "Select Drink" },
    description: {
      de: "In der frei einstellbaren Getränkekarte bieten Sie den Gästen ein vielfältiges Getränkeangebot.",
      en: "In the freely adjustable drinks menu, you offer your guests a wide range of drinks.",
    },
    image: "/assets/choose.jpg",
  },
  {
    number: "02",
    title: { de: "Kontaktlos Bezahlen", en: "Contactless Payment" },
    description: {
      de: "Die Bezahlung funktioniert per Smartphone, Bankkarte oder Kreditkarte. Die Umsätze landen auf Ihrem Konto.",
      en: "Guests pay by credit card or smartphone.",
    },
    image: "/assets/pay.jpg",
  },
  {
    number: "03",
    title: { de: "Eiswürfel", en: "Ice cubes" },
    description: {
      de: "Die Selfservice-Bar kommt mit einem robusten Eiswürfelbereiter.",
      en: "The self-service bar comes with a robust ice cube maker.",
    },
    image: "/assets/ice.jpg",
  },
  {
    number: "04",
    title: {
      de: "Trinkglas platzieren",
      en: "Place drinking glass",
    },
    description: {
      de: "Getränke werden vom 24/7 Barkeeper direkt aus der Originalflasche ins Trinkglas ausgeschenkt.",
      en: "Drinks are poured directly from the original bottle into the drinking glass by the 24/7 bartender.",
    },
    image: "/assets/glass.jpg",
  },
  {
    number: "05",
    title: { de: "Softdrinks & Filler", en: "Soft drinks & filler" },
    description: {
      de: "Softdrinks und Filler-Getränke werden durch das Post-Mix System ausgeschenkt.",
      en: "Soft drinks and filler drinks are dispensed by the post-mix system.",
    },
    image: "/assets/soft.jpg",
  },
  {
    number: "06",
    title: {
      de: "Genießen",
      en: "Enjoy",
    },
    description: {
      de: "Drink entnehmen und genießen.",
      en: "Enjoy your drink.",
    },
    image: "/assets/enjoy2.jpg",
  },
]

export default function Functionality({ lang }: { lang: Locale }) {
  return (
    <div className="bg-white py-24 sm:py-32 relative overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-7xl">
          <h2 className="mt-1 text-3xl font-bold text-gray-800 sm:text-4xl sm:tracking-tight lg:text-4xl">
            {translations[lang].title}
          </h2>
          <p className="max-w-xl mt-5 text-lg text-gray-500">
            {lang === "de"
              ? "Die Selfservice-Bar serviert Ihren Gästen rund um die Uhr frische Drinks in höchster Qualität. Das System wurde von uns in Vorarlberg entwickelt und wird In-House produziert."
              : "The self-service bar serves your guests fresh drinks around the clock in the highest quality. The system was developed by us in Vorarlberg and is produced In-House."}
          </p>
        </div>
        <div className="mt-24 grid gap-16 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12 relative">
          {functionalites.map((feature, idx) => (
            <div key={feature.number} className="z-10">
              <Fade delay={idx * 100} triggerOnce>
                <div>
                  <div className="mt-6">
                    <Image
                      className="h-56 w-full object-cover shadow-lg rounded-2xl"
                      src={feature.image}
                      alt={feature.title[lang]}
                      width={300}
                      height={300}
                      quality={100}
                    />
                  </div>
                  <div className="mt-6">
                    <span className="text-gray-500">{feature.number}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mt-2">
                      {feature.title[lang]}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description[lang]}
                    </p>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
          <BackgroundY />
        </div>
        {/* embed youtube */}
        <div className="mt-24">
          <iframe
            allowFullScreen
            className="w-full h-[500px] my-8 rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${translations[lang].youtube}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  )
}
