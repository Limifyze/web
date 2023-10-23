import HeaderBlog from "@/components/blog/HeaderBlog"
import PostList from "@/components/blog/PostList"
import Footer from "@/components/home/Footer"
import Nav from "@/components/home/Nav"
import { Locale } from "@/middleware"
import { parseImageUrl } from "@/utils/cms"
import { Post, Tag } from "@/utils/types"
import type { GetStaticProps, Metadata, ResolvingMetadata } from "next"

type Props = {
  params: { lang: Locale }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = params.lang
  if (lang == "de") {
    return {
      title: "Blog | Limifyze",
      description:
        "Willkommen in unserer Welt der Innovation! In unserem Blog teilen wir Einblicke in die spannendsten neuen Produkte, die wir für Hotels und Restaurants entwickeln. Tauche ein in die faszinierende Welt der Automatisierung und des Internet der Dinge (IoT), und entdecke, wie wir mit modernster Technologie und effizientem Personaleinsatz das Gästeerlebnis revolutionieren. Begleite uns auf unserer Reise und erfahre, wie wir gemeinsam mit unseren Kunden die Zukunft der Gastfreundschaft gestalten.",
      openGraph: {
        type: "website",
        locale: "de",
        url: "https://limifyze.com/de/blog",
        title: "Limifyze",
        description:
          "Willkommen in unserer Welt der Innovation! In unserem Blog teilen wir Einblicke in die spannendsten neuen Produkte, die wir für Hotels und Restaurants entwickeln. Tauche ein in die faszinierende Welt der Automatisierung und des Internet der Dinge (IoT), und entdecke, wie wir mit modernster Technologie und effizientem Personaleinsatz das Gästeerlebnis revolutionieren. Begleite uns auf unserer Reise und erfahre, wie wir gemeinsam mit unseren Kunden die Zukunft der Gastfreundschaft gestalten.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fdrawingdev.png&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Development Blog",
          },
        ],
      },
    }
  } else
    return {
      title: "Blog | Limifyze",
      description:
        "Welcome to our world of innovation! In our blog, we share insights into the most exciting new products we're developing for hotels and restaurants. Dive into the fascinating world of automation and the Internet of Things (IoT), and discover how we're revolutionizing guest experiences with cutting-edge technology and efficient staff deployment. Join us on our journey and learn how, together with our customers, we're shaping the future of hospitality.",
      openGraph: {
        type: "website",
        locale: "en",
        url: "https://limifyze.com/en/development",
        title: "Limifyze",
        description:
          "Welcome to our world of innovation! In our blog, we share insights into the most exciting new products we're developing for hotels and restaurants. Dive into the fascinating world of automation and the Internet of Things (IoT), and discover how we're revolutionizing guest experiences with cutting-edge technology and efficient staff deployment. Join us on our journey and learn how, together with our customers, we're shaping the future of hospitality.",
        images: [
          {
            url: "https://limifyze.com/_next/image?url=%2Fassets%2Fdrawingdev.png&w=1920&q=90",
            width: 1920,
            height: 1080,
            alt: "Limifyze Development Blog",
          },
        ],
      },
    }
}

// This site is used to display the contact form and nothing else
// e.g. for the app to allow users to contact us directly from the app to delete their data

const Blog = async ({ params: { lang } }: Props) => {
  const { posts, tags } = await getData({ locale: lang })
  console.log("posts", posts)
  return (
    <main className="bg-white overflow-x-hidden">
      <Nav lang={lang} />
      <HeaderBlog locale={lang} />
      <PostList posts={posts} tags={tags} locale={lang} />
      <Footer lang={lang} />
    </main>
  )
}

async function getData({ locale }: { locale: Locale }) {
  const lang = locale
  // fields does not work on localized content
  //   const fields = {
  //     slug: 1,
  //     title: 1,
  //     content: 1,
  //     tags: 1,
  //     thumbnail: 1,
  //     _id: 1,
  //   }
  const res = await fetch(
    "https://cms.limifyze.com/:website-limifyze-com/api/content/items/BlogPost?locale=" +
      lang +
      "&sort=" +
      JSON.stringify({
        sort: -1,
      }),
    {
      cache: "force-cache",
      next: {
        revalidate: 10, // In seconds
      },
    }
  )

  const tags = await fetch(
    "https://cms.limifyze.com/:website-limifyze-com/api/content/items/Tag?locale=" +
      lang,
    {
      cache: "force-cache",
      next: {
        revalidate: 10, // In seconds
      },
    }
  )
  const posts = await res.json()
  const tagsJson = await tags.json()

  return {
    posts: posts.map((post: any) => ({
      ...post,
      thumbnail: parseImageUrl(post.thumbnail.path),
    })),
    tags: tagsJson,
  }
}

export default Blog
