import * as React from 'react'
//
import { Domain, Usecase } from '../features'
import { contentful } from '../libs/'
//
import { Meta } from '../components/shareds'
import { HomePage } from '../components/pages'

type ArticleItems = Array<Domain.Article.Entity>

// FIXME
type Props = {
  items: ArticleItems
  total: number
  limit: number
}

const Home = (props: Props) => {
  const title = 'Home'

  return (
    <>
      <Meta state={{ title }} />
      <HomePage />
    </>
  )
}

Home.getInitialProps = async function() {
  const collection = await Usecase.ArticleCollection.fetchArticleCollection({
    client: contentful.apiClient
  })

  return {
    items: collection?.items,
    total: collection?.total,
    limit: collection?.limit
  }
}

export default Home
