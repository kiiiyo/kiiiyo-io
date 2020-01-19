import { FC } from 'react'
//
import { Domain } from '../../../features'
import { GenericTemplate } from '../../templates'
import { ArticleSinglePaginator } from '../../molecules'
import { HeaderBar, Footer, ArticleSingle } from '../../organisms'

/**
 * Interface
 */

type ArticleItem = Domain.Article.Entity

type StateProps = {
  article: ArticleItem
  url: string
}

interface ArticlePagePresenterProps {
  state: StateProps
}

interface ArticlePageProps {
  state: StateProps
}

export const ArticlePagePresenter: FC<ArticlePagePresenterProps> = props => {
  const {
    state: { article, url }
  } = props
  const link = '/'
  return (
    <GenericTemplate headerBar={<HeaderBar />} footer={<Footer />}>
      <ArticleSingle state={{ article, url }} />
      <ArticleSinglePaginator state={{ link }} />
    </GenericTemplate>
  )
}

export const ArticlePage: React.FC<ArticlePageProps> = props => {
  return <ArticlePagePresenter {...props} />
}
