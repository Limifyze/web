import { Locale } from "@/middleware"
import { Post, Tag } from "@/utils/types"
import Image from "next/image"
import Link from "next/link"

const translations = {
  de: {
    title: "Unser Blog",
    subtitle: "Unsere neuesten Beiträge",
    text: "Willkommen in unserer Welt der Innovation! In unserem Blog teilen wir Einblicke in die spannendsten neuen Produkte, die wir für Hotels und Restaurants entwickeln. Tauche ein in die faszinierende Welt der Automatisierung und des Internet der Dinge (IoT), und entdecke, wie wir mit modernster Technologie und effizientem Personaleinsatz das Gästeerlebnis revolutionieren. Begleite uns auf unserer Reise und erfahre, wie wir gemeinsam mit unseren Kunden die Zukunft der Gastfreundschaft gestalten.",
    button: "Zum Blog",
  },
  en: {
    title: "Our Blog",
    subtitle: "Our latest posts",
    text: "Welcome to our world of innovation! In our blog, we share insights into the most exciting new products we're developing for hotels and restaurants. Dive into the fascinating world of automation and the Internet of Things (IoT), and discover how we're revolutionizing guest experiences with cutting-edge technology and efficient staff deployment. Join us on our journey and learn how, together with our customers, we're shaping the future of hospitality.",
    button: "To the blog",
  },
}

const PostList = ({
  posts,
  tags,
  isBlogPreview, // This is used to display the blog preview on the homepage
  locale,
}: {
  posts: Post[]
  tags: Tag[]
  isBlogPreview?: boolean
  locale: Locale
}) => {

  console.log("possrs",posts)
  return (
    <div className="overflow-hidden bg-gray-50 pb-16 lg:pb-24">
      <div className="relative mx-auto max-w-xl px-6 lg:max-w-7xl lg:px-8">
        {isBlogPreview && (
          <div className="max-w-3xl mt-5">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">
              {translations[locale].subtitle}
            </h2>
            <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {translations[locale].title}
            </p>
            <p className="mt-4 text-lg text-gray-500">
              {translations[locale].text}
            </p>
            <Link
              href={"/" + locale + "/blog"}
              className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            >
              {translations[locale].button} &rarr;
            </Link>
          </div>
        )}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts?.map((post) => (
            <Link
              href={`/${locale}/blog/${post.slug}`}
              key={post._id}
              className="flex flex-col items-start hover:bg-primary-50 transition-all"
            >
              <div className="relative w-full">
                <Image
                  width={1024}
                  height={576}
                  sizes="(max-width: 800px) 100vw, 1024px"
                  src={post.thumbnail.url}
                  alt={post.title ?? ""}
                  className="aspect-[3/2] w-full rounded-2xl bg-gray-100 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <p className="relative z-10 rounded-full bg-gray-200 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    {
                      tags.filter(
                        (el) =>
                          el._id ===
                          ("length" in post.tags ? post.tags[0] : post.tags)._id
                      )[0].title
                    }
                  </p>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.preview}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostList
