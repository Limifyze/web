import { Locale } from "@/middleware"
import Image from "next/image"

const translations = {
  en: {
    title: "Limifyze Blog",
    subtitle: "References, guides and more",
  },
  de: {
    title: "Limifyze Blog",
    subtitle: "Referenzen, Guides und mehr",
  },
}

const HeaderBlog = ({ locale }: { locale: Locale }) => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8 mt-24">
      <Image
        fill
        src="/assets/drawingdev.png"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {translations[locale].title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {translations[locale].subtitle}
        </p>
        <div className="w-[100%] h-[100%] bg-black absolute top-0 left-0 opacity-80 -z-10"></div>
      </div>
    </div>
  )
}

export default HeaderBlog
