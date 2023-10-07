import { Locale } from "@/middleware"
import Image from "next/image"

const translations = {
  de: {
    title: "In verschiedenen Dekors erhältlich",
  },
  en: {
    title: "Available in different decors",
  },
}

export default function Dekors({ lang }: { lang: Locale }) {
  return (
    <div className="overflow-hidden bg-white mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10 text-center">
          {translations[lang].title}
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-3 lg:items-start">
          <Image
            src="/assets/dekor-1.png"
            alt="SSB-Dekor-1"
            className="rounded-lg object-contain shadow-lg"
            width={1000}
            height={1000}
            quality={100}
          />
          <Image
            src="/assets/dekor-2.png"
            alt="SSB-Dekor-2"
            className="rounded-lg object-contain shadow-lg"
            width={1000}
            height={1000}
            quality={100}
          />
          <Image
            src="/assets/dekor-3.png"
            alt="SSB-Dekor-3"
            className="rounded-lg object-contain shadow-lg"
            width={1000}
            height={1000}
            quality={100}
          />
        </div>
      </div>
    </div>
  )
}
