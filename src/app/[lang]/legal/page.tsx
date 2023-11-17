import Footer from "@/components/home/Footer"
import Nav from "@/components/home/Nav"
import { Locale } from "@/middleware"
import Head from "next/head"
const translations = {
  en: {
    title: "Legal Notice",
    tradeReg: "Trade Regulations",
    superAuth: "Supervisory Authority",
    infoOnline: "Information on online dispute resolution",
    infoOnlineText:
      "Consumers have the opportunity to submit complaints to the EU's online dispute resolution platform: https://ec.europa.eu/odr. You can also send any complaints to the e-mail address given above.",
    md: "Managing Directors",
    photos: "Photos",
    photosText:
      "Many thanks to Nina Bröll! (<a href='https://broell.cc' target='_blank'>broell.cc</a>)",
  },
  de: {
    title: "Impressum",
    tradeReg: "Gewerbeordnung",
    superAuth: "Aufsichtsbehörde",
    infoOnline: "Informationen zur Online-Streitbeilegung",
    infoOnlineText:
      "Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: https://ec.europa.eu/odr. Sie können auch Beschwerden an die oben angegebene E-Mail-Adresse senden.",
    md: "Geschäftsführer",
    photos: "Fotos",
    photosText:
      'Herzlichen Dank an Nina Bröll! (<a href="https://broell.cc" target="_blank">broell.cc</a>)',
  },
}

const Home = ({
  params: { lang },
}: {
  params: {
    lang: Locale
  }
}) => {
  return (
    <div>
      <Head>
        <title>{translations[lang].title} | Limifyze</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <Nav lang={lang} />
        <div className="relative overflow-hidden bg-white py-32">
          <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
            <div
              className="relative mx-auto h-full max-w-prose text-lg"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-prose text-lg">
              <h1>
                <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                  {translations[lang].title}
                </span>
              </h1>
              <p className="mt-8 text-lg leading-8 text-gray-800">
                Limifyze GmbH
                <br />
                Hof 499
                <br />
                6861 Alberschwende
                <br />
                AT - Österreich
                <br />
                552170s
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                Mobil: +43 660 / 1590121
                <br />
                info@limifyze.com
                <br />
                limifyze.com
              </p>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                UID/VAT: ATU76704728
                <br />
                {translations[lang].tradeReg}: www.ris.bka.gv.at
                <br />
                {translations[lang].superAuth}: Bezirkshauptmannschaft Bregenz
                <br />
                {translations[lang].md}: Linus Albrecht, Michael Bertel, Günther
                Pörnbacher
              </p>
              <h3 className="mt-10 text-lg font-bold">
                {translations[lang].infoOnline}
              </h3>
              <p className="mt-4 text-lg leading-8 text-gray-800">
                {translations[lang].infoOnlineText}
              </p>
              <h3 className="mt-10 text-lg font-bold">
                {translations[lang].photos}
              </h3>
              <p
                className="mt-4 text-lg leading-8 text-gray-800"
                dangerouslySetInnerHTML={{
                  __html: translations[lang].photosText,
                }}
              />
            </div>
          </div>
        </div>
        <Footer lang={lang} />
      </main>
    </div>
  )
}

export default Home
