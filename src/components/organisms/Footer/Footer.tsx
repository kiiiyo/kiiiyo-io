import { FC } from 'react'
import styled from 'styled-components'
//
import { Credit } from '../../atoms'

/**
 * Generic Component
 */

export const Footer: FC = () => {
  return (
    <StyledFooter>
      <Credit copyright={`Kiiiyo's IO`} />
    </StyledFooter>
  )
}

/**
 * Styled Component
 */

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 64px;
`
