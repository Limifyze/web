import { load } from "cheerio"

export const parseImageUrl = (path: string) => {
  return {
    url: `https://cms.limifyze.com/.spaces/website-limifyze-com/storage/uploads${path}`,
  }
}

export const getNextImageUrl = (src: string, hostname: string) => {
  return `${hostname}/_next/image?url=${encodeURIComponent(src)}&w=640&q=80`
}

export const parseHtml = (html: string, hostname: string) => {
  const $ = load(html)
  const images = $("img")

  images.each((index, element) => {
    const src = $(element).attr("src")
    const newSrc = src?.replace("\\", "")
    $(element).attr(
      "src",
      getNextImageUrl(
        newSrc ? "https://cms.limifyze.com/" + newSrc : "",
        hostname
      )
    )
    $(element).addClass("w-full sm:w-4/5 mx-auto my-6")
  })

  const h2 = $("h2")
  h2.each((index, element) => {
    $(element).addClass("text-2xl font-bold mb-3 mt-6")
  })

  const ul = $("ul")
  ul.each((index, element) => {
    $(element).addClass("list-disc list-inside my-3")
  })

  return $.html()
}
