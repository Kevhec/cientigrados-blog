import type { BlogPost, PostPreview } from '../../types/sanityTypes'
import { sanityClient } from 'sanity:client'

async function getAllPosts (): Promise<BlogPost[]> {
  const query = `
    *[_type == "post"]{
      _id,
      author -> { name },
      title,
      mainImage,
      excerpt,
      publishedAt
    }
  `

  return getByQuery(query);
}

async function getAllPostsPreviews(): Promise<PostPreview[]> {
  const query = `
  *[_type == "post"]{
    _id,
    author -> { name },
    slug,
    title,
    mainImage,
    excerpt,
    publishedAt
  } |
  order(publishedAt desc)
`

  return getByQuery(query)
}

async function getByQuery(query: string) {
  const data = await sanityClient.fetch(query)
  return data
}

export { getAllPosts, getAllPostsPreviews }