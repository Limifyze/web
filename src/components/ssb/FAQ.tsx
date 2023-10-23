import { Locale } from "@/middleware"
import { parseHtml } from "@/utils/cms"
import { HOSTNAME } from "@/utils/config"

export default async function FAQ({ lang }: { lang: Locale }) {
  const faqs = (await getData({ lang })).faq

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
          FAQ
        </h2>
        <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
          {faqs.map((faq: any) => (
            <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
              <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <div
                  className="text-gray-800"
                  dangerouslySetInnerHTML={{
                    __html: parseHtml(faq.answer ?? "", HOSTNAME),
                  }}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

async function getData(params: { lang: Locale }) {
  const faqs = await fetch(
    "https://cms.limifyze.com/:website-limifyze-com/api/content/items/FAQ?locale=" +
      params.lang,
    {
      cache: "force-cache",
      next: {
        revalidate: 10, // In seconds
      },
    }
  )
  const faqsJson = await faqs.json()

  return {
    faq: faqsJson,
  }
}
