import { useState, useEffect, useCallback } from 'react'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'
//
import { Domain, Usecase } from '../features'
import { contentful } from '../libs/'
//
import { Meta } from '../components/shareds'
import { HomePage } from '../components/pages'

const calculateRange = (length: number) =>
  Array.from({ length }, (v, k) => k + 1)

type ArticleCollection = Array<Domain.Article.Entity>

// FIXME
type Props = {
  page?: number
  items: ArticleCollection
  total: number
  limit: number
}

const Home = (props: Props) => {
  const { page, items, total, limit } = props
  const articleCollection = items.length ? items : []
  const rangeLimit = Math.ceil(total / limit)
  const pageRange = calculateRange(rangeLimit)
  const router = useRouter()
  const title = 'Home'
  const [currentPage, updateCurrentPage] = useState(page || 1)
  //
  useEffect(() => {
    void router.push({ pathname: '/', query: { page: currentPage } })
  }, [currentPage])

  const handlePageChange = useCallback((value: number) => {
    updateCurrentPage(value)
  }, [])

  return (
    <>
      <Meta state={{ title }} />
      <HomePage
        state={{ articleCollection, pageRange, currentPage }}
        actions={{
          handlePageChange
        }}
      />
    </>
  )
}

Home.getInitialProps = async function({ query }: NextPageContext) {
  let defaultPage = 1
  const defaultLimit = 3

  if (query.page && Number(query.page) > 0) {
    defaultPage = parseInt(query.page + '')
  }
  const collection = await Usecase.ArticleCollection.fetchArticleCollection({
    client: contentful.apiClient,
    skip: (defaultPage - 1) * defaultLimit,
    limit: defaultLimit
  })

  return {
    page: defaultPage,
    items: collection?.items,
    total: collection?.total,
    limit: collection?.limit
  }
}

export default Home
