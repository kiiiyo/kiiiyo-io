import { ContentfulClientApi, Sys, EntryFields } from 'contentful'
import { format } from 'date-fns'

export const CONTENT_TYPE_ARTICLE = 'article'

/**
 * interface
 */

type ArticleFields = {
  title: EntryFields.Text
  description: EntryFields.Text
  slug: EntryFields.Text
  body: EntryFields.RichText
  author: EntryFields.Object
  image?: EntryFields.Object
  publishedAt: string
}

type ArticleCollection = {
  items: Array<{
    sys: Sys
    fields: ArticleFields
  }>
  total: number
}

export interface FetchArticleCollectionParams {
  client: ContentfulClientApi
  limit?: number
  skip?: number
}

export async function fetchArticleCollection(
  params: FetchArticleCollectionParams
) {
  const { client } = params
  const limit = params.limit || 3
  const skip = params.skip || 0

  try {
    const collection: ArticleCollection = await client.getEntries({
      // eslint-disable-next-line @typescript-eslint/camelcase
      content_type: CONTENT_TYPE_ARTICLE,
      include: 1,
      limit,
      skip,
      order: '-sys.createdAt'
    })

    const items = collection.items.map(
      ({ sys, fields }: { sys: Sys; fields: ArticleFields }) => {
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
          new Date(sys.createdAt.split('.')[0]),
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
      }
    )

    const total = collection.total

    return { items, total, limit, skip }
  } catch (error) {
    // TODO: add error handling
    console.log(error)
  }
}
