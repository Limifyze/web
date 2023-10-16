import { Locale } from "@/middleware"
import Image from "next/image"

const texts = {
  de: {
    title: "Unser Team",
    text: "Limifyze ist Entwickler und Hersteller von smarten Produkten für die Gastronomie aus Alberschwende in Vorarlberg.",
  },
  en: {
    title: "Our Team",
    text: "Limifyze is a developer and manufacturer of smart products for the gastronomy industry from Alberschwende in Vorarlberg.",
  },
}

const people = [
  {
    name: "Linus Albrecht",
    role: "Hardware Development & Manufacturing",
    imageUrl: "/assets/linus_albrecht.jpg",
    email: "linus@limifyze.com",
  },
  {
    name: "Michael Bertel",
    role: "Software Development & IT-Infrastucture",
    imageUrl: "/assets/michael_bertel.jpg",
    email: "michael@limifyze.com",
  },
  {
    name: "Günther Pörnbacher",
    role: "Sales",
    imageUrl: "/assets/guenther_poernbacher.jpg",
    email: "guenther@limifyze.com",
  },
]

export default function Team({ lang }: { lang: Locale }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {texts[lang].title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {texts[lang].text}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                width={1500}
                height={1500}
                quality={90}
                className="aspect-[3/2] w-full rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
              <a
                href={`mailto:${person.email}`}
                className="text-base leading-7 text-primary-700 hover:text-primary-600"
              >
                {person.email}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
