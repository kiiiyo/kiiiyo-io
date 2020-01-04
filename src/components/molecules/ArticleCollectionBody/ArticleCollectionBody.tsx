import { FC } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
//
import { Domain } from '../../../features'
import { useTheme, Theme } from '../../../libs/hooks/useTheme'

/**
 * Interface
 */

interface ArticleCollectionBodyProps {
  state: {
    title: Domain.Article.Text
    link: string
    description: Domain.Article.Text
  }
}

/**
 * Generic Component
 */

export const ArticleCollectionBody: FC<ArticleCollectionBodyProps> = props => {
  const {
    state: { title, link, description }
  } = props
  const themes = useTheme()

  return (
    <StyledContainer themes={themes}>
      <StyledTitle themes={themes}>
        <Link href={link}>
          <StyledLink themes={themes}>{title}</StyledLink>
        </Link>
      </StyledTitle>
      <StyledDescription themes={themes}>{description}</StyledDescription>
    </StyledContainer>
  )
}

/**
 * Styled Component
 */

const StyledContainer = styled.div`
  ${({ themes }: { themes: Theme }) => {
    const { spacing } = themes
    return css`
      padding: ${spacing(4)} ${spacing(4)} ${spacing(8)};
    `
  }}
`
const StyledTitle = styled.h1`
  ${({ themes }: { themes: Theme }) => {
    const { palette, typography } = themes
    return css`
      margin: 0 0 1rem;
      padding: 0;
      color: ${palette.grey[800]};
      font-size: ${typography.display3.fontSize};
      font-weight: ${typography.display3.fontWeight};
      line-height: ${typography.display3.lineHeight};
      letter-spacing: ${typography.display3.letterSpacing};
    `
  }}
`

const StyledDescription = styled.div`
  ${({ themes }: { themes: Theme }) => {
    const { palette, typography } = themes
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

const StyledLink = styled.a<{ themes: Theme }>`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      cursor: pointer;
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
    `
  }}
`
