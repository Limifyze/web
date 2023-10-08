"use client"
import { Locale } from "@/middleware"
import { Switch } from "@headlessui/react"
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"

const translations = {
  en: {
    title: "Get in touch",
    name: "Name",
    phone: "Phone number",
    company: "Company",
    message: "Message",
    send: "Send",
    privacySelect: "By selecting this, you agree to our",
    privacy: "Privacy Policy",
    privacyError: "Please agree to our Privacy Policy",
    emailError: "Please enter a valid email address",
    error: "Something went wrong. Please contact us directly.",
    success:
      "Thank you for your message. We will get back to you as soon as possible.",
  },
  de: {
    title: "Kontaktieren Sie uns",
    name: "Name",
    phone: "Telefonnummer",
    company: "Firma",
    message: "Nachricht",
    send: "Senden",
    privacySelect: "Hiermit akzeptieren Sie unsere",
    privacy: "Datenschutzerklärung",
    privacyError: "Bitte akzeptieren Sie unsere Datenschutzerklärung",
    emailError: "Bitte geben Sie eine gültige E-Mail-Adresse ein",
    error: "Etwas ist schief gelaufen. Bitte kontaktieren Sie uns direkt.",
    success:
      "Vielen Dank für Ihre Nachricht. Wir melden uns so schnell wie möglich bei Ihnen.",
  },
}
function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

const Contact = ({ locale }: { locale: Locale }) => {
  const [agreed, setAgreed] = useState(false)
  const [privacyError, setPrivacyError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle")

  const handleSubmit = (e: any) => {
    e.preventDefault()

    let errors = false
    if (!agreed) {
      setPrivacyError(true)
      errors = true
    } else {
      setPrivacyError(false)
    }
    if (!e.target.email.value.includes("@")) {
      setEmailError(true)
      errors = true
    } else {
      setEmailError(false)
    }
    if (errors) {
      return
    }

    const values = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      company: e.target.company.value,
      message: e.target.message.value,
    }
    setStatus("sending")

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status === 200) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    })
  }

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:py-48 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-primary-100 lg:w-1/2"></div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              {translations[locale].title}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600"></p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  Hof 499
                  <br />
                  6861, Alberschwende
                  <br />
                  AT
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Phone</span>
                  <PhoneIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="tel:+436802162095">
                    +43 680 2162095
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">E-Mail</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a
                    className="hover:text-gray-900"
                    href="mailto:info@limifyze.com"
                  >
                    info@limifyze.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {status === "error" ? (
          <h2 className="text-3xl font-bold tracking-tight text-primary-600 px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8">
            {translations[locale].error}
          </h2>
        ) : status === "success" ? (
          <h2 className="text-3xl font-bold tracking-tight text-green-600 px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8">
            {translations[locale].success}
          </h2>
        ) : (
          <form
            onSubmit={handleSubmit}
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:py-48 lg:px-8"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[locale].name}
                  </label>
                  <div className="mt-2.5">
                    <input
                      disabled={status === "sending"}
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[locale].company}
                  </label>
                  <div className="mt-2.5">
                    <input
                      disabled={status === "sending"}
                      type="text"
                      name="company"
                      id="company"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  {emailError && (
                    <span className="text-primary-600 text-sm leading-6">
                      {translations[locale].emailError}
                    </span>
                  )}
                  <div className="mt-2.5">
                    <input
                      disabled={status === "sending"}
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[locale].phone}
                  </label>
                  <div className="mt-2.5">
                    <input
                      disabled={status === "sending"}
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    {translations[locale].message}
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  {privacyError && (
                    <span className="text-sm text-primary-600 leading-6">
                      {translations[locale].privacyError}
                    </span>
                  )}
                  <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed ? "bg-primary-600" : "bg-gray-200",
                          "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                        )}
                      >
                        <span className="sr-only">Agree to policies</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? "translate-x-3.5" : "translate-x-0",
                            "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                          )}
                        />
                      </Switch>
                    </div>
                    <Switch.Label className="text-sm leading-6 text-gray-600">
                      {translations[locale].privacySelect}{" "}
                      <Link
                        target={"_blank"}
                        href="/privacy"
                        className="font-semibold text-primary-600"
                      >
                        {translations[locale].privacy}
                      </Link>
                      .
                    </Switch.Label>
                  </Switch.Group>
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  disabled={status === "sending"}
                  type="submit"
                  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  {translations[locale].send}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
export default Contact
