import { FC } from 'react'
import styled from 'styled-components'
//

/**
 * Presenter component
 */

export const LogotypePresenter: FC = props => {
  const { children } = props
  return <StyledLogotype>{children}</StyledLogotype>
}

/**
 * Generic component
 */

export const Logotype: React.FC = props => {
  return <LogotypePresenter {...props} />
}

/**
 * Styled component
 */

const StyledLogotype = styled.h1`
  font-size: 1em;
  margin: 0;
  padding: 0;
`
