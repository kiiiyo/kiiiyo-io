import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { Domain } from '../../../features'
import { richTextToReactComponents } from '../../../libs/contentful'
import { useTheme, Theme } from '../../../libs/hooks/useTheme'

/**
 * Interface
 */

interface ArticleSingleBodyProps {
  state: {
    body: Domain.Article.RichText
  }
}

/**
 * Generic Component
 */

export const ArticleSingleBody: FC<ArticleSingleBodyProps> = props => {
  const {
    state: { body }
  } = props
  const theme = useTheme()

  return (
    <StyledContainer theme={theme}>
      <StyledBody theme={theme}>{richTextToReactComponents(body)}</StyledBody>
    </StyledContainer>
  )
}

/**
 * Styled Component
 */

const StyledContainer = styled.div`
  ${({ theme }: { theme: Theme }) => {
    const { spacing } = theme
    return css`
      padding: ${spacing(4)} ${spacing(4)} ${spacing(8)};
    `
  }}
`

const StyledBody = styled.div`
  ${({ theme }: { theme: Theme }) => {
    const { palette, typography } = theme
    return css`
      & > p {
        margin: 0;
        padding: 0;
        color: ${palette.grey[700]};
        font-size: ${typography.body.fontSize};
        font-weight: ${typography.body.fontWeight};
        line-height: ${typography.body.lineHeight};
        letter-spacing: ${typography.body.letterSpacing};
      }
    `
  }}
`
