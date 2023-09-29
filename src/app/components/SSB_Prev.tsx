import Image from "next/image"

const features = [
  {
    name: "Selfservice.",
    description:
      "Ihre Gäste bedienen die Selfservice-Bar selbständig.Die Getränke werden automatisch ausgeschenkt und verkauft.",
    icon: "/assets/icons/group.svg",
  },
  {
    name: "Nützlich von morgens bis abends.",
    description:
      "Verschieben Sie die Selfservice-Bar mühelos zwischen Frühstück, Hotel, Lounge und Barbereich.",
    icon: "/assets/icons/night.svg",
  },
  {
    name: "Offener Ausschank.",
    description:
      "Die Getränke werden sichtbar aus der Original-Flasche ausgeschenkt. Perfekt für hochwertige Weine und Spirituosen.",
    icon: "/assets/icons/liquor.svg",
  },
]

export default function SSB_Prev() {
  return (
    <>
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pl-4 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base font-semibold leading-7 text-primary-500">
                  Limifyze Selfservice-Bar
                </h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  In 30 Sekunden zum Lieblingsgetränk
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Dieses System ermöglicht es dem Betreiber{" "}
                  <strong>
                    mit nur einer einzigen Füllung, ohne Personal bis zu 150
                    Cocktails
                  </strong>
                  , 300 Shots oder 40L Postmix Drinks an seine Gäste zu
                  verkaufen.
                  <br />
                  <br />
                  Die SELFSERVICE-BAR ist ein vollautomatisches Getränke-Mix-,
                  Ausschank- und Vending-System, mit dem der Gast nach
                  Barschluss oder auch untertags in gut frequentierten Bereichen
                  ohne Bar-Mitarbeiter selbst einen Cocktail mixen und per
                  Kreditkarte oder Handy bezahlen kann.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-primary-500 px-8 py-2.5 font-semibold shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
                  >
                    Zur Selfservice-Bar
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <Image
                src="/assets/ssb-top.png"
                alt="Product screenshot"
                className="max-w-none rounded-xl"
                width={1500}
                height={1500}
                layout="responsive"
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
            <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
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
                          layout="fixed"
                          quality={100}
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="sm:px-6 lg:px-0">
              <div className="relative isolate overflow-hidden bg-primary-500 rounded-xl">
                <Image
                  src="/assets/ssb-happy.jpg"
                  alt="Product screenshot"
                  width={1920}
                  height={1080}
                  className="max-w-none bg-gray-800"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
