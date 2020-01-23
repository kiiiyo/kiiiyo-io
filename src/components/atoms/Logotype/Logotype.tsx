import { FC } from 'react'
import styled from 'styled-components'
import Logo from './logo.svg'

/**
 * Styled component
 */

const StyledLogotype = styled.h1`
  position: relative;
  height: 1rem;
  margin: 0;
  padding: 0;
  > svg {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    height: 1rem;
  }
`

/**
 * Presenter component
 */

export const LogotypePresenter: FC = () => {
  //
  return (
    <StyledLogotype>
      <Logo />
    </StyledLogotype>
  )
}

/**
 * Combine component
 */

export const Logotype: FC = () => {
  return <LogotypePresenter />
}
