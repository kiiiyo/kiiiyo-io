import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { Domain } from '../../../features'
import { useTheme, Theme } from '../../../libs/hooks/useTheme'
import {
  ArticleSingleHeader,
  ArticleSingleBody
} from '../../../components/molecules'
import { Divider } from '../../../components/atoms/Divider'

/**
 * Interface
 */

type ArticleItem = Domain.Article.Entity

type StateProps = {
  article: ArticleItem
}

interface ArticleSingleProps {
  state: StateProps
}

/**
 * Generic Component
 */

export const ArticleSingle: React.FC<ArticleSingleProps> = props => {
  const {
    state: {
      article: { title, author, publishedAt, image, body }
    }
  } = props
  const themes = useTheme()
  return (
    <StyledContainer themes={themes}>
      <ArticleSingleHeader state={{ title, author, publishedAt }} />
      <Divider />
      <ArticleSingleBody state={{ body }} />
    </StyledContainer>
  )
}

/**
 * Styled Component
 */

const StyledContainer = styled.article`
  ${({ themes }: { themes: Theme }) => {
    const { palette, shadow } = themes
    return css`
      width: 100%;
      background-color: ${palette.common.white};
      box-shadow: ${shadow[3]};
      border-radius: 0.5rem;
    `
  }}
`
