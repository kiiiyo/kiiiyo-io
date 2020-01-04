import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { useTheme, Theme } from '../../../libs/hooks/useTheme'
import { Icon } from '../../atoms'

/**
 * Interface
 */

export interface ArticleCollectionPaginatorProps {
  state: {
    currentPage: number
    pageRange: number[]
  }
  actions: {
    handlePageChange: (value: number) => void
  }
}

export interface ArticleCollectionPaginatorProps {
  state: {
    currentPage: number
    pageRange: number[]
  }
  actions: {
    handlePageChange: (value: number) => void
  }
}

/**
 * Presenter Component
 */

export const ArticleCollectionPaginatorPresenter: FC<ArticleCollectionPaginatorProps> = props => {
  const {
    state: { currentPage, pageRange },
    actions: { handlePageChange }
  } = props
  const themes = useTheme()
  return (
    <StyledContainer themes={themes}>
      {currentPage > 1 && (
        <StyledPreviousButton
          themes={themes}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <StyledIcon>
            <Icon name="arrow-left" />
          </StyledIcon>
          Previous
        </StyledPreviousButton>
      )}
      <StyledPageState>
        <StyledCurrentPage themes={themes}>{currentPage}</StyledCurrentPage>
        <StyledPageSeparator themes={themes}>/</StyledPageSeparator>
        <StyledPageRange themes={themes}>{pageRange.length}</StyledPageRange>
      </StyledPageState>
      {currentPage < pageRange[pageRange.length - 1] && (
        <StyledNextButton
          themes={themes}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
          <StyledIcon>
            <Icon name="arrow-right" size="1x" />
          </StyledIcon>
        </StyledNextButton>
      )}
    </StyledContainer>
  )
}

/**
 * Generic Component
 */

export const ArticleCollectionPaginator: FC<ArticleCollectionPaginatorProps> = props => {
  return <ArticleCollectionPaginatorPresenter {...props} />
}

/**
 * Styled Component
 */

const StyledContainer = styled.div`
  ${({ themes }: { themes: Theme }) => {
    const { palette, spacing, shadow } = themes
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

const StyledPreviousButton = styled.button`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      line-height: 0;
      height: 100%;
      border: none;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1001;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      color: ${palette.grey[800]};
    `
  }}
`

const StyledNextButton = styled.button`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      line-height: 0;
      margin-left: auto;
      height: 100%;
      border: none;
      background-color: transparent;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1001;
      cursor: pointer;
      display: flex;
      flex-direction: row;
      align-items: center;
      font-size: 14px;
      color: ${palette.grey[800]};
    `
  }}
`
const StyledIcon = styled.div`
  width: 16px;
  margin: 0 16px;
`

const StyledPageState = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  height: 64px;
  line-height: 64px;
  z-index: 1000;
`

const StyledCurrentPage = styled.span`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      font-weight: 700;
      color: ${palette.grey[700]};
      font-size: 16px;
    `
  }}
`

const StyledPageRange = styled.span`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      font-weight: bold;
      color: ${palette.grey[700]};
      font-size: 12px;
      font-weight: 100;
    `
  }}
`

const StyledPageSeparator = styled.span`
  ${({ themes }: { themes: Theme }) => {
    const { palette, spacing } = themes
    return css`
      display: inline-block;
      padding: 0 ${spacing(1)};
      color: ${palette.grey[700]};
      font-size: 12px;
      font-weight: 100;
    `
  }}
`
