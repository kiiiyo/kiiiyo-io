import { ContentfulClientApi, Sys, EntryFields } from 'contentful'
import { format } from 'date-fns'

export const CONTENT_TYPE_ARTICLE = 'article'

type ArticleFields = {
  title: EntryFields.Text
  description: EntryFields.Text
  slug: EntryFields.Text
  body: EntryFields.RichText
  author: EntryFields.Object
  image: EntryFields.Object
  publishedAt: string
}

type ArticleCollection = {
  items: Array<{
    sys: Sys
    fields: ArticleFields
  }>
  total: number
}

type ArticleSingle = {
  sys: Sys
  fields: ArticleFields
}

export interface FetchArticleParams {
  client: ContentfulClientApi
  slug?: string
}

export async function fetchArticle(params: FetchArticleParams) {
  const { client, slug } = params

  try {
    const collection: ArticleCollection = await client.getEntries({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: CONTENT_TYPE_ARTICLE,
      'fields.slug': slug,
      limit: 1,
      skip: 0,
      order: '-sys.createdAt'
    })

    const { sys, fields } = collection.items[0]

    // eslint-disable-next-line no-prototype-builtins
    const image = fields.hasOwnProperty('image')
      ? {
          id: fields.image.sys.id || null,
          title: fields.image.fields.title || null,
          url: fields.image.fields.file.url
            ? `https:${fields.image.fields.file.url}`
            : null
        }
      : null

    const publishedAt = format(
      new Date(sys.updatedAt.split('.')[0]),
      'yyyy/MM/dd HH:mm'
    )

    return {
      id: sys.id,
      title: fields.title,
      slug: fields.slug,
      description: fields.description,
      body: fields.body,
      image,
      author: {
        id: fields.author.sys.id || null,
        name: fields.author.fields.name || null,
        description: fields.author.fields.description || null,
        metadata: fields.author.fields.metadata || null,
        imageUrl: fields.author.fields.imageUrl || null
      },
      publishedAt: publishedAt || null
    }
  } catch (error) {
    // TODO: add error handling
    console.log(error)
  }
}
