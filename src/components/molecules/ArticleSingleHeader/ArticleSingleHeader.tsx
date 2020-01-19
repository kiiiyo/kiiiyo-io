import { FC } from 'react'
import styled, { css } from 'styled-components'
import { FacebookShareButton, TwitterShareButton } from 'react-share'
//
import { Domain } from '../../../features'
import { useTheme, Theme } from '../../../libs/hooks/useTheme'
import { Divider, Icon } from '../../../components/atoms'

/**
 * Interface
 */

interface ArticleSingleHeaderProps {
  state: {
    url: string
    title: string
    author: Domain.Author.Entity
    publishedAt: string
  }
}

/**
 * Styled Component
 */

const StyledContainer = styled.header`
  ${({ themes }: { themes: Theme }) => {
    const { spacing } = themes
    return css`
      padding: ${spacing(4)} 0 0;
    `
  }}
`

const StyledAuthorContainer = styled.div`
  ${({ themes }: { themes: Theme }) => {
    const { spacing } = themes
    return css`
      padding: ${spacing(2)} ${spacing(4)} ${spacing(3)};
      display: flex;
      justify-content: flex-start;
    `
  }}
`

const StyledTitle = styled.h1`
  ${({ themes }: { themes: Theme }) => {
    const { spacing, typography, palette } = themes
    return css`
      padding: 0 ${spacing(4)};
      margin: ${spacing(0)} ${spacing(0)} ${spacing(4)};
      font-size: ${typography.h1};
      color: ${palette.grey[900]};
      line-height: 1.5;
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

const StyledShareAction = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

// FIXME:
const StyledShareButton = styled.span`
  ${({ themes }: { themes: Theme }) => {
    return css`
      margin-left: 1rem;
      color: ${themes.palette.grey[700]};
      &:hover {
        color: ${themes.palette.grey[600]};
      }
      &:active {
        color: ${themes.palette.grey[800]};
      }
      > button:focus {
        outline: 0 !important;
      }
    `
  }}
`

const StyledShareButtonIcon = styled.span`
  display: inline-block;
  width: 1.5rem;
`

/**
 * Generic Component
 */

export const ArticleSingleHeader: FC<ArticleSingleHeaderProps> = props => {
  const {
    state: { title, author, publishedAt, url }
  } = props
  const themes = useTheme()
  //
  return (
    <StyledContainer themes={themes}>
      <StyledTitle themes={themes}>{title}</StyledTitle>
      <Divider />
      <StyledAuthorContainer themes={themes}>
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
        <StyledShareAction>
          <StyledShareButton themes={themes}>
            <FacebookShareButton url={url} quote={title}>
              <StyledShareButtonIcon>
                <Icon prefix="fab" name="facebook-square" />
              </StyledShareButtonIcon>
            </FacebookShareButton>
          </StyledShareButton>
          <StyledShareButton themes={themes}>
            <TwitterShareButton url={url} title={title}>
              <StyledShareButtonIcon>
                <Icon prefix="fab" name="twitter" />
              </StyledShareButtonIcon>
            </TwitterShareButton>
          </StyledShareButton>
        </StyledShareAction>
      </StyledAuthorContainer>
    </StyledContainer>
  )
}
