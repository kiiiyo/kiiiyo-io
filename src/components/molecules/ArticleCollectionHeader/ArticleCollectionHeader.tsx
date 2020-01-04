import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { Domain } from '../../../features'
import { useTheme, Theme } from '../../../libs/hooks/useTheme'

/**
 * Interface
 */

interface ArticleCollectionHeaderProps {
  state: {
    author: Domain.Author.Entity
    publishedAt: string
  }
}

/**
 * Generic Component
 */

export const ArticleCollectionHeader: FC<ArticleCollectionHeaderProps> = props => {
  const {
    state: { author, publishedAt }
  } = props
  const themes = useTheme()
  //
  return (
    <StyledContainer themes={themes}>
      <StyledAuthorImage
        themes={themes}
        alt={author.name}
        src={author.imageUrl}
      />
      <div>
        <StyledAuthorName themes={themes}>{author.name}</StyledAuthorName>
        <StyledDate themes={themes} dateTime={publishedAt}>
          {publishedAt}
        </StyledDate>
      </div>
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
      display: flex;
      padding: ${spacing(4)} ${spacing(4)} ${spacing(2)};
    `
  }}
`

// FIXME: refactoring move to atom component
const StyledAuthorImage = styled.img`
  ${({ themes }: { themes: Theme }) => {
    const { spacing } = themes
    return css`
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 1.25rem;
      margin-right: ${spacing(2)};
    `
  }}
`

const StyledAuthorName = styled.span`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      display: block;
      font-weight: bold;
      font-size: 12px;
      color: ${palette.grey[800]};
    `
  }}
`

const StyledDate = styled.time`
  ${({ themes }: { themes: Theme }) => {
    const { palette, spacing } = themes
    return css`
      display: block;
      font-size: 11px;
      padding-top: ${spacing(1)};
      color: ${palette.grey[600]};
    `
  }}
`
