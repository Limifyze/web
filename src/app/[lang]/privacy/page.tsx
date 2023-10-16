import Footer from "@/components/home/Footer"
import Nav from "@/components/home/Nav"
import { Locale } from "@/middleware"
import Head from "next/head"

const texts = {
  title: {
    en: "Disclaimer",
    de: "Datenschutz",
  },
  intro: {
    en: "<p>The protection of your personal data is of particular concern to us. We therefore process your data exclusively on the basis of the legal provisions (DSGVO, TKG 2003). In this data protection information, we inform you about the most important aspects of data processing within the scope of our website.</p><p>When visiting our website, your IP address, start and end of the session is recorded for the duration of this session. This is technically required and thus represents a legitimate interest iSv Art 6 para 1 lit f DSGVO. Unless otherwise regulated in the following, this data will not be further processed by us.</p>",
    de: "<p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.</p><p>Beim Besuch unserer Webseite wird Ihre IP-Adresse, Beginn und Ende der Sitzung für die Dauer dieser Sitzung erfasst. Dies ist technisch bedingt und stellt damit ein berechtigtes Interesse iSv Art 6 Abs 1 lit f DSGVO dar. Soweit im Folgenden nichts anderes geregelt wird, werden diese Daten von uns nicht weiterverarbeitet.</p>",
  },
  contact: {
    en: "<h3><strong>Contact with us</strong></h3><p>If you contact us by form on the website or by e-mail, the data you provide will be stored by us for six months for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.</p>",
    de: "<h3><strong>Kontakt mit uns</strong></h3><p>Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen, werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>",
  },
  yourRights: {
    en: "<h3><strong>Your rights</strong></h3><p>With regard to your data stored by us, you are generally entitled to the rights of information, correction, deletion, restriction, data portability, revocation and objection. If you believe that the processing of your data violates data protection law or that your data protection rights have been violated in any other way, you may lodge a complaint with <info@limifyze.com> or the data protection authority.</p>",
    de: "<h3><strong>Ihre Rechte</strong></h3><p>Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei uns <info@limifyze.com> oder der Datenschutzbehörde beschweren.</p>",
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
        <title>{texts.title[lang]} | Limifyze</title>
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
                  {texts.title[lang]}
                </span>
              </h1>
              <p
                className="mt-8 text-lg leading-8 text-gray-800"
                dangerouslySetInnerHTML={{ __html: texts.intro[lang] }}
              ></p>
              <div
                className="mt-8 text-lg leading-8 text-gray-800"
                dangerouslySetInnerHTML={{ __html: texts.contact[lang] }}
              />
              <div
                className="mt-8 text-lg leading-8 text-gray-800"
                dangerouslySetInnerHTML={{ __html: texts.yourRights[lang] }}
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
