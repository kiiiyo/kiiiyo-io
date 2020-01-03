import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { useTheme, Theme } from '../../../libs/hooks/useTheme'

/**
 * Interface
 */

interface CreditProps {
  copyright: string
}

/**
 * Generic Component
 */

export const Credit: FC<CreditProps> = props => {
  const { copyright } = props
  const themes = useTheme()
  return <StyledCredit themes={themes}>&copy; {copyright}</StyledCredit>
}

/**
 * Styled Component
 */

const StyledCredit = styled.div<{ themes: Theme }>`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      font-size: 12px;
      color: ${palette.grey[600]};
    `
  }}
`
