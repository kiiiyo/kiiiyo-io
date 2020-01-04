import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { Domain } from '../../../features'
import { useTheme, Theme } from '../../../libs/hooks/useTheme'

/**
 * Interface
 */

interface ArticleCollectionMediaProps {
  state: {
    image: Domain.Article.Image
  }
}

/**
 * Generic Component
 */

export const ArticleCollectionMedia: FC<ArticleCollectionMediaProps> = props => {
  const {
    state: { image }
  } = props
  const themes = useTheme()
  //
  return (
    <StyledContainer themes={themes}>
      <StyledArticleImage alt={image.title} src={image.url} />
    </StyledContainer>
  )
}

/**
 * Styled Component
 */

const StyledContainer = styled.div`
  ${({ themes }: { themes: Theme }) => {
    const { palette, breakpoint } = themes
    return css`
      display: flex;
      margin-top: -8px;
      background-color: ${palette.grey[100]};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 280px;
      overflow: hidden;
      @media (max-width: ${breakpoint.sm}) {
        height: 196px;
        overflow: hidden;
      }
    `
  }}
`
const StyledArticleImage = styled.img`
  width: 100%;
`
