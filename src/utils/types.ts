export interface Post {
  slug: string
  title?: string
  content?: string
  sort?: number
  tags:
    | {
        _id: string
      }
    | {
        _id: string
      }[]
  thumbnail: {
    url: string
  }
  _id: string
  preview?: string
}

export interface Tag {
  slug: string
  title: string
  _id: string
}
