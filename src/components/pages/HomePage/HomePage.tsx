import { FC } from 'react'
//
import { Domain } from '../../../features'
import { GenericTemplate } from '../../templates'
import { HeaderBar, Footer, ArticleCollection } from '../../organisms'
import { ArticleCollectionPaginator } from '../../molecules'

/**
 * Interface
 */

type ArticleCollection = Array<Domain.Article.Entity>

type StateProps = {
  articleCollection: ArticleCollection
  currentPage: number
  pageRange: number[]
}

type ActionsProps = {
  handlePageChange: (value: number) => void
}

interface HomePagePresenterProps {
  state: StateProps
  actions: ActionsProps
}

interface HomePageProps {
  state: StateProps
  actions: ActionsProps
}

export const HomePagePresenter: React.FC<HomePagePresenterProps> = props => {
  const {
    state: { articleCollection, pageRange, currentPage },
    actions: { handlePageChange }
  } = props

  console.log(articleCollection)

  return (
    <GenericTemplate headerBar={<HeaderBar />} footer={<Footer />}>
      {articleCollection.length > 0 ? (
        <>
          <ArticleCollection state={{ articleCollection }} />
          <ArticleCollectionPaginator
            state={{ pageRange, currentPage }}
            actions={{ handlePageChange }}
          />
        </>
      ) : (
        <>
          {/* FIXME: Empty State */}
          <div>Empty</div>
        </>
      )}
    </GenericTemplate>
  )
}

export const HomePage: FC<HomePageProps> = props => {
  return <HomePagePresenter {...props} />
}
