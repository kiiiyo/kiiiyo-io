import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { Domain } from '../../../features'
import { useTheme, Theme } from '../../../libs/hooks/useTheme'
import {
  ArticleCollectionHeader,
  ArticleCollectionMedia,
  ArticleCollectionBody
} from '../../../components/molecules'
//
import { Divider } from '../../atoms'

/**
 * Interface
 */

type ArticleCollection = Array<Domain.Article.Entity>

type StateProps = {
  articleCollection: ArticleCollection
}

interface ArticleCollectionProps {
  state: StateProps
}

/**
 * Generic Component
 */

export const ArticleCollection: FC<ArticleCollectionProps> = props => {
  const {
    state: { articleCollection }
  } = props

  const themes = useTheme()
  return (
    <>
      {articleCollection.map((article, index) => {
        const { author, image, publishedAt, title, description, slug } = article
        const link = `/articles/${slug}`
        return (
          <StyledContainer key={index} themes={themes}>
            {/* TODO: molecules */}
            <ArticleCollectionHeader state={{ author, publishedAt }} />
            <Divider />
            {image && <ArticleCollectionMedia state={{ image }} />}
            <ArticleCollectionBody state={{ title, description, link }} />
          </StyledContainer>
        )
      })}
    </>
  )
}

/**
 * Styled Component
 */

const StyledContainer = styled.article`
  ${({ themes }: { themes: Theme }) => {
    const { palette, shadow, spacing } = themes
    return css`
      width: 100%;
      margin-top: ${spacing(8)};
      background-color: ${palette.common.white};
      box-shadow: ${shadow[3]};
      border-radius: 0.5rem;

      &:first-child {
        margin-top: ${spacing(0)};
      }
    `
  }}
`
