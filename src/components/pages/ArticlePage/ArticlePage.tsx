import { FC } from 'react'
//
import { Domain } from '../../../features'
import { GenericTemplate } from '../../templates'
import { HeaderBar, Footer } from '../../organisms'

/**
 * Interface
 */

type ArticleItem = Domain.Article.Entity

type StateProps = {
  article: ArticleItem
}

interface ArticlePagePresenterProps {
  state: StateProps
}

interface ArticlePageProps {
  state: StateProps
}

export const ArticlePagePresenter: FC<ArticlePagePresenterProps> = props => {
  const {
    state: { article }
  } = props
  const link = '/'
  return (
    <GenericTemplate headerBar={<HeaderBar />} footer={<Footer />}>
      aaaa
    </GenericTemplate>
  )
}

export const ArticlePage: React.FC<ArticlePageProps> = props => {
  return <ArticlePagePresenter {...props} />
}
