import { Locale } from "@/middleware"

const translations = {
  de: {
    title: "Gemeinsam von der Idee zum marktreifen Produkt.",
    text: "Step by Step, wie die Produktentwicklung mit uns funktioniert:<br />Wir setzen grundsätzlich auf ein agiles Projektmanagement. Entsprechend flexibel und individuell gestalten wir die einzelnen Schritte der Produktentwicklung.",
    steps: [
      {
        title: "Analyse / Ideenfindung &rarr; 1. Konzept",
        text: "Gemeinsam mit Ihnen analysieren wir Ihre Idee und entwickeln ein erstes Konzept. Wir definieren die Anforderungen und legen die Ziele fest.",
      },
      {
        title: "Entwicklung + Konstruktion",
        text: "Die gemeinsam erarbeitete Lösung wird in Code und Konstruktionen umgewandelt, um anschließend..",
      },
      {
        title: "Prototyping",
        text: "..in einem ersten Prototypen zu münden. Dieser wird anschließend getestet und optimiert.",
      },
      {
        title: "Pilotphase",
        text: "Der Prototyp hat sich bewährt!<br /> Jetzt werden gewonnene Learnings eingearbeitet und die erste Pilotserie produziert.",
      },
      {
        title: "Serienreife",
        text: "Auch die Pilotphase hat sich bewährt!<br />Die neu gewonnenen Erkenntnisse werden eingearbeitet und die erste Serie kann produziert werden.<br />Der Endgegner, &quot;der Markt&quot;, wartet.",
      },
    ],
  },
  en: {
    title: "Together from the idea to the market-ready product.",
    text: "Step by step, how product development works with us:<br />We generally rely on agile project management. Accordingly, we design the individual steps of product development flexibly and individually.",
    steps: [
      {
        title: "Analysis / idea finding &rarr; 1. Concept",
        text: "Together with you, we analyze your idea and develop an initial concept. We define the requirements and set the goals.",
      },
      {
        title: "Development + construction",
        text: "The jointly developed solution is converted into code and constructions and then ...",
      },
      {
        title: "Prototyping",
        text: "... to result in a first prototype. This is then tested and optimized.",
      },
      {
        title: "Pilot phase",
        text: "The prototype has proven itself! <br /> Now the knowledge gained is incorporated and the first pilot series is produced.",
      },
      {
        title: "Series maturity",
        text: "The pilot phase has also proven itself! <br /> The new findings are incorporated and the first series can be produced. <br /> The end boss, &quot;the market&quot;, is waiting.",
      },
    ],
  },
}

export default function HowWeWork({ lang }: { lang: Locale }) {
  return (
    <div className="overflow-visible bg-white mt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold">{translations[lang].title}</h2>
        <p
          className="mt-4 tracking-tight text-gray-700 max-w-3xl"
          dangerouslySetInnerHTML={{ __html: translations[lang].text }}
        />
        <div className="mt-9">
          {translations[lang].steps.map((step, idx) => (
            <div key={step.title} className="px-3 lg:px-8 lg:pr-4">
              <div className="mx-auto max-w-2xl lg:mx-0 mt-6">
                <dl className="text-base leading-7 text-gray-600">
                  <div key={step.title} className="relative">
                    <span className="text-primary-600 font-bold">
                      0{idx + 1}
                    </span>
                    <h3
                      className="font-bold text-gray-900 text-xl mt-2"
                      dangerouslySetInnerHTML={{ __html: step.title }}
                    ></h3>
                    <p
                      className=""
                      dangerouslySetInnerHTML={{ __html: step.text }}
                    />
                  </div>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
