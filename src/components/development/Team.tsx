import { Locale } from "@/middleware"
import Image from "next/image"

const people = [
  {
    name: "Linus Albrecht",
    role: "Hardware",
    imageUrl: "/assets/linus_albrecht.jpg",
    email: "linus@limifyze.com",
    phone: "+43 681 81942206",
  },
  {
    name: "Michael Bertel",
    role: "Software",
    imageUrl: "/assets/michael_bertel.jpg",
    email: "michael@limifyze.com",
    phone: "+43 660 1590121",
  },
]

export default function Team({ lang }: { lang: Locale }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:grid-cols-2"
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
              </a><br />
              <a
                href={`tel:${person.phone}`}
                className="text-base leading-7 text-primary-700 hover:text-primary-600"
              >
                {person.phone}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
