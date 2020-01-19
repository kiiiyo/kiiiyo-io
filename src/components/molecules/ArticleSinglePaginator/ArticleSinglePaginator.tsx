import { FC } from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
//
import { useTheme, Theme } from '../../../libs/hooks/useTheme'
import { Icon } from '../../atoms'

/**
 * Interface
 */

export interface ArticleSinglePaginatorProps {
  state: {
    link: string
  }
}

/**
 * Presenter Component
 */

export const ArticleCollectionPaginatorPresenter: FC<ArticleSinglePaginatorProps> = props => {
  const {
    state: { link }
  } = props
  const theme = useTheme()
  return (
    <StyledContainer theme={theme}>
      <StyledBackButton theme={theme}>
        <Link href={link}>
          <StyledLink>
            <StyledIcon>
              <Icon name="arrow-left" prefix="fas" />
            </StyledIcon>
            View all articles
          </StyledLink>
        </Link>
      </StyledBackButton>
    </StyledContainer>
  )
}

/**
 * Generic Component
 */

export const ArticleSinglePaginator: React.FC<ArticleSinglePaginatorProps> = props => {
  return <ArticleCollectionPaginatorPresenter {...props} />
}

/**
 * Styled Component
 */

const StyledContainer = styled.div`
  ${({ theme }: { theme: Theme }) => {
    const { palette, spacing, shadow } = theme
    return css`
      height: 64px;
      margin-top: ${spacing(8)};
      border-radius: 0.5rem;
      background-color: ${palette.common.white};
      box-shadow: ${shadow[3]};
      position: relative;
    `
  }}
`

const StyledBackButton = styled.span`
  ${({ theme }: { theme: Theme }) => {
    const { palette } = theme
    return css`
      line-height: 0;
      height: 100%;
      border: none;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1001;
      font-size: 14px;
      color: ${palette.grey[800]};
    `
  }}
`
const StyledIcon = styled.div`
  width: 16px;
  margin: 0 16px;
`

const StyledLink = styled.a`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 64px;
`
