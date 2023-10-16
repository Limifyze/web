"use client"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { Locale, locales } from "@/middleware"
import Link from "next/link"

const navigation = [
  {
    name: {
      de: "Selfservice-Bar",
      en: "Selfservice-Bar",
    },
    href: "/ssb",
  },
  { name: { de: "Über Uns", en: "About Us" }, href: "/about" },
  {
    name: { de: "Produktentwicklung", en: "Product Development" },
    href: "/development",
  },
  // { name: { de: "Blog", en: "Blog" }, href: "#" },
  {
    name: { de: "Ledovation", en: "Ledovation" },
    href: "https://ledovation.at",
  },
]

export default function Nav({ lang }: { lang: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl">
        <div className="px-6 pt-6 lg:max-w-7xl lg:pl-8 lg:pr-0">
          <nav
            className="flex items-center justify-between lg:justify-start"
            aria-label="Global"
          >
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Limifyze GmbH</span>
              <img
                alt="Limifyze GmbH"
                className="h-8 w-auto"
                src="/assets/logo.svg"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="hidden lg:ml-auto pr-4 lg:flex lg:gap-x-14">
              {navigation.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name[lang]}
                    href={"/" + lang + item.href}
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name[lang]}
                  </Link>
                ) : (
                  <a
                    key={item.name[lang]}
                    href={item.href}
                    target="_blank"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    {item.name[lang]}
                  </a>
                )
              )}
              {locales && (
                <div>
                  <select
                    id="location"
                    name="location"
                    className="block rounded-md border-gray-700 border border-s py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    defaultValue={lang.toUpperCase()}
                    onChange={(e) => {
                      const locale = e.target.value.toLowerCase()
                      window.location.href = `/${locale}/${window.location.pathname.replace(
                        `/${lang}`,
                        "/"
                      )}`
                    }}
                  >
                    {locales.map((locale) => (
                      <option key={locale} value={locale.toUpperCase()}>
                        {locale.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </nav>
        </div>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Limifyze GmbH</span>
              <img className="h-8 w-auto" src="/logo.svg" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) =>
                  item.href.startsWith("/") ? (
                    <Link
                      key={item.name[lang]}
                      href={"/" + lang + item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name[lang]}
                    </Link>
                  ) : (
                    <a
                      key={item.name[lang]}
                      href={item.href}
                      target="_blank"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name[lang]}
                    </a>
                  )
                )}
              </div>
              <div className="py-6">
                {locales && (
                  <div className="mr-8">
                    <select
                      id="location"
                      name="location"
                      className="my-1 block rounded-md border-gray-700 border border-s py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                      defaultValue={lang.toUpperCase()}
                      onChange={(e) => {
                        const locale = e.target.value.toLowerCase()
                        window.location.href = `/${locale}/${window.location.pathname.replace(
                          `/${lang}`,
                          "/"
                        )}`
                      }}
                    >
                      {locales.map((locale) => (
                        <option key={locale} value={locale.toUpperCase()}>
                          {locale.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
