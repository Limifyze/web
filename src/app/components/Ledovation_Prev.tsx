import Image from "next/image"

export default function Ledovation_Prev() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-rose-500">
                Ledovation SERVICETUBE®
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Wartezeiten reduzieren
                <br />
                und
                <br />
                Zusatzumsätze erzielen
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Die smarte Tischleuchte für die Gastronomie.
                <br />
                <br />
                Der SERVICETUBE® wird durch Berührung rot und benachrichtigt das
                Servicepersonal in Echtzeit per App oder Smartwatch dank
                neuester Funktechnologie auch in großräumigen Restaurants.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://ledovation.at"
                  target="_blank"
                  className="rounded-md bg-rose-600 px-8 py-2.5 font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500"
                >
                  Zu Ledovation
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src="/assets/ledovation.jpg"
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
  )
}
