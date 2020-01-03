import { FC } from 'react'
//
import { GenericTemplate } from '../../templates'
import { HeaderBar, Footer } from '../../organisms'
/**
 * Interface
 */

type StateProps = {}

type ActionsProps = {}

interface HomePagePresenterProps {
  state: StateProps
  actions: ActionsProps
}

interface HomePageProps {
  state: StateProps
  actions: ActionsProps
}

export const HomePagePresenter: React.FC = props => {
  // const {
  //   state: { articleItems, pageRange, currentPage },
  //   actions: { handlePageChange }
  // } = props

  return (
    <GenericTemplate headerBar={<HeaderBar />} footer={<Footer />}>
      <div>Home page</div>
    </GenericTemplate>
  )
}

export const HomePage: FC = props => {
  return <HomePagePresenter {...props} />
}
