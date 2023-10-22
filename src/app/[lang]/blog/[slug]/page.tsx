import Footer from "@/components/home/Footer"
import Nav from "@/components/home/Nav"
import { Locale } from "@/middleware"
import { getNextImageUrl, parseHtml, parseImageUrl } from "@/utils/cms"
import { HOSTNAME } from "@/utils/config"
import { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"

type Props = {
  params: { lang: Locale; slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { article } = await getData({ lang: params.lang, slug: params.slug })
  // read route params
  const lang = params.lang

  return {
    title: article.title,
    description: article.preview,
    openGraph: {
      type: "website",
      locale: "de",
      url: "https://limifyze.com/" + lang + "/blog/" + article.slug,
      title: "Limifyze",
      description: article.preview,
      images: [
        {
          url: getNextImageUrl(article.thumbnail.url, HOSTNAME),
          width: 1920,
          height: 1080,
          alt: article.title,
        },
      ],
    },
  }
}

const BlogArticle = async ({ params: { lang, slug } }: Props) => {
  const { article } = await getData({ lang, slug })

  if (!article) return <h1>Not Found</h1>
  return (
    <main className="bg-white overflow-x-hidden">
      <Nav lang={lang} />
      <div className="bg-white px-6 py-12 sm:py-24 lg:px-8 mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {article.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {article.preview}
          </p>
        </div>
      </div>
      <div className="pb-16 lg:pb-24">
        <div className="relative mx-auto max-w-xl px-6 lg:max-w-4xl lg:px-8">
          <Image
            width={1024}
            height={576}
            sizes="(max-width: 800px) 100vw, 1024px"
            src={article.thumbnail.url}
            alt={article.title ?? ""}
            className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
          />
          <div
            className="mt-12 text-gray-800"
            dangerouslySetInnerHTML={{
              __html: parseHtml(article.content ?? "", HOSTNAME),
            }}
          />
          <div className="mt-12">
            <Link
              href={"/" + lang + "/blog"}
              className="text-lg font-medium text-primary-600 hover:text-primary-500"
            >
              &larr; Blog
            </Link>
          </div>
        </div>
      </div>
      <Footer lang={lang} />
    </main>
  )
}

// get static props for each article

export async function getData(params: Props["params"]) {
  const filter = {
    slug: params?.slug,
  }
  const res = await fetch(
    `https://cms.limifyze.com/:website-limifyze-com/api/content/item/BlogPost?filter=${encodeURIComponent(
      JSON.stringify(filter)
    )}&locale=${params.lang}`,
    {
      cache: "force-cache",
      next: {
        revalidate: 15, // In seconds
      },
    }
  )
  const article = await res.json()

  return {
    article: {
      ...article,
      thumbnail: parseImageUrl(article.thumbnail.path),
    },
  }
}

export default BlogArticle
