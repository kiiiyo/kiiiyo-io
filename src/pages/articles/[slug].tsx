import { NextPageContext } from 'next'
//
import { Domain, Usecase } from '../../features'
import { contentful } from '../../libs/'
//
import { Meta } from '../../components/shareds'
import { ArticlePage } from '../../components/pages'

type Props = {
  article: Domain.Article.Entity
}

const Article = (props: Props) => {
  const { article } = props
  const { title, description, slug } = article
  const domain = process.env.DOMAIN_URL || ''
  const url = `${domain}/articles/${slug}`

  return (
    <>
      <Meta state={{ title, description }} />
      <ArticlePage state={{ article, url }} />
    </>
  )
}

Article.getInitialProps = async function({ query }: NextPageContext) {
  const { slug } = query

  const querySlug = (value: string | string[]) =>
    typeof value === 'string' ? value : ''

  const article = await Usecase.Article.fetchArticle({
    client: contentful.apiClient,
    slug: querySlug(slug)
  })

  return {
    article
  }
}

export default Article
