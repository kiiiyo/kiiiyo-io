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
      padding: ${spacing(4)};
    `
  }}
`

const StyledBody = styled.div`
  ${({ theme }: { theme: Theme }) => {
    const { palette, typography, spacing } = theme
    return css`
      & h1 {
        color: ${palette.grey[800]};
        margin-top: ${spacing(12)};
        margin-bottom: ${spacing(8)};
        ${typography.h1};
      }
      & h2 {
        color: ${palette.grey[800]};
        margin-top: ${spacing(12)};
        margin-bottom: ${spacing(8)};
        ${typography.h2};
      }
      & h3 {
        color: ${palette.grey[800]};
        margin-top: ${spacing(12)};
        margin-bottom: ${spacing(8)};
        ${typography.h3};
      }
      & h4 {
        color: ${palette.grey[700]};
        margin-top: ${spacing(8)};
        margin-bottom: ${spacing(4)};
        ${typography.h4};
      }
      & h5 {
        color: ${palette.grey[700]};
        margin-top: ${spacing(8)};
        margin-bottom: ${spacing(4)};
        ${typography.h5};
      }
      & h6 {
        color: ${palette.grey[600]};
        margin-top: ${spacing(8)};
        margin-bottom: ${spacing(4)};
        ${typography.h6};
      }
      & p {
        margin-top: 0;
        margin-bottom: ${spacing(8)};
        color: ${palette.grey[700]};
        ${typography.paragraph};
      }
      & b {
        color: ${palette.grey[800]};
        font-weight: bold;
      }
      & i {
        font-style: italic;
      }
      & u {
        text-decoration: underline;
      }
      & pre {
        margin: ${spacing(8)} -${spacing(4)};
        padding: ${spacing(4)};
        color: ${palette.common.white};
        background-color: ${palette.grey[900]};
        ${typography.pre};
      }
      & code {
        color: ${palette.common.white};
        background-color: ${palette.grey[900]};
        ${typography.code};
      }
      & p > a {
        &:link {
          color: ${palette.grey[800]};
        }
        &:visited {
          color: ${palette.grey[800]};
        }
        &:hover {
          color: ${palette.grey[700]};
        }
        &:active {
          color: ${palette.grey[900]};
        }
      }
      & ul,
      & ol {
        margin: 0 0 ${spacing(10)};
        padding: 0;
        line-height: 1.75;
      }
      & ul > li,
      & ol > li {
        padding: 0;
        margin-left: ${spacing(6)};
      }
      & ul > * p,
      & ol > * p {
        margin: 0;
      }

      & ul > li > li,
      & ol > li > li {
        margin-left: ${spacing(6)};
        line-height: 1.75rem;
      }

      & ul > li > ul,
      & ul > li > ol,
      & ol > li > ul,
      & ol > li > ol {
        margin-bottom: ${spacing(2)};
      }

      blockquote {
        display: block;
        overflow: hidden;
        position: relative;
        margin: ${spacing(12)} 0;
        padding: ${spacing(4)};
        background-color: ${palette.grey[50]};
        border-radius: 0.5rem;
      }
      blockquote > * {
        margin-top: 0;
        margin-bottom: 0;
      }
    `
  }}
`
