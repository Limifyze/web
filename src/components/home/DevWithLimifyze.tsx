"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import clsx from "clsx"
import { Locale } from "@/middleware"
import Link from "next/link"

const translations = {
  de: {
    title: "Produktentwicklung mit Limifyze",
    desc: "In den vergangenen Jahren haben wir jede Menge Erfahrungen in der Produktentwicklung gesammelt. Unsere Expertise reicht von der Konzeptionierung über die Entwicklung bis hin zur Serienreife. Wir begleiten Sie gerne auf Ihrem Weg zum fertigen Produkt.",
    cta: "Mehr erfahren",
  },
  en: {
    title: "Product Development with Limifyze",
    desc: "In recent years we have gained a lot of experience in product development. Our expertise ranges from conceptualization to development to series maturity. We will be happy to accompany you on your way to the finished product.",
    cta: "Learn more",
  },
}

const features = [
  {
    title: {
      de: "Lösungsfindung",
      en: "Solution Finding / Conceptualization",
    },
    description: {
      de: "Gemeinsam analysieren wir die Ausgangssituation und erarbeiten verschiedene Lösungswege.",
      en: "Together we analyze the initial situation and work out different solutions.",
    },
    image: "/assets/drawing.png",
  },
  {
    title: {
      de: "Entwicklung + Konstruktion",
      en: "Development + Construction",
    },
    description: {
      de: "Die gemeinsam erarbeitete Lösung wird in Code und Konstruktionen umgewandelt, um anschließend..",
      en: "The jointly developed solution is converted into code and constructions and then...",
    },
    image: "/assets/proto.png",
  },
  {
    title: {
      de: "Prototyping -> Pilotphase",
      en: "Prototyping -> Pilot Phase",
    },
    description: {
      de: "... in Gestalt eines Prototyps das Licht der Welt zu erblicken. Dieser wird anschließend in der Pilotphase getestet und optimiert.",
      en: "... see the light of day in the form of a prototype. This is then tested and optimized in the pilot phase.",
    },
    image: "/assets/pilot.JPG",
  },
  {
    title: {
      de: "Serienreife",
      en: "Series maturity",
    },
    description: {
      de: "Nach erfolgreicher Pilotphase wird das Produkt in Serie produziert und ausgeliefert.",
      en: "After a successful pilot phase, the product is produced and delivered in series.",
    },
    image: "/assets/final.jpg",
  },
]

export function DevWithLimifyze({ lang }: { lang: Locale }) {
  let [tabOrientation, setTabOrientation] = useState<"horizontal" | "vertical">(
    "horizontal"
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia("(min-width: 1024px)")

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? "vertical" : "horizontal")
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener("change", onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener("change", onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-primary-500 pb-28 pt-20 sm:py-32"
    >
      <div className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {translations[lang].title}
          </h2>
          <p className="mt-4 text-gray-700 sm:mt-6 md:mt-8 max-w-2xl mx-auto">
            {translations[lang].desc}
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === "vertical"}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title[lang]}
                      className={clsx(
                        "group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6",
                        selectedIndex === featureIndex
                          ? "bg-white lg:bg-white/20 lg:ring-1 lg:ring-inset lg:ring-white/10"
                          : "hover:bg-white/10 lg:hover:bg-white/5"
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            "font-display text-lg focus:outline-none",
                            selectedIndex === featureIndex
                              ? "text-primary-600 lg:text-gray-900"
                              : "text-primary-900 hover:text-gray-900 lg:text-gray-900"
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title[lang]}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          "mt-2 hidden text-sm lg:block",
                          selectedIndex === featureIndex
                            ? "text-gray-900"
                            : "text-primary-900 group-hover:text-gray-900"
                        )}
                      >
                        {feature.description[lang]}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title[lang]} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <p className="relative mx-auto max-w-2xl text-base text-gray-900 sm:text-center">
                        {feature.description[lang]}
                      </p>
                    </div>
                    <div className="mt-10 overflow-hidden rounded-xl shadow-xl shadow-primary-900/20 lg:mt-0 relative flex">
                      <Image
                        className="object-contain object-center w-full h-full max-h-[500px] my-auto relative"
                        src={feature.image}
                        alt=""
                        priority
                        width={1500}
                        height={1000}
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
        <div className="mt-10 flex">
          <Link
            href={"/" + lang + "/development"}
            className="rounded-md bg-white px-8 py-2.5 font-semibold text-color shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
            {translations[lang].cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
