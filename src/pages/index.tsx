import * as React from 'react'
//
import { Domain, Usecase } from '../features'
import { contentful } from '../libs/'

type ArticleItems = Array<Domain.Article.Entity>

// FIXME
type Props = {
  items: ArticleItems
  total: number
  limit: number
}

const Home = (props: Props) => {
  return (
    <>
      <div>{props.items[0].title}</div>
      <div>{props.items[0].description}</div>
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
