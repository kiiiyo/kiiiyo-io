import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { Domain } from '../../../features'
import { richTextToReactComponents } from '../../../libs/contentful'
import { useTheme, Theme } from '../../../libs/hooks/useTheme'
import { Icon } from '../../atoms'

/**
 * Interface
 */

interface ArticleAuthorProps {
  state: {
    author: Domain.Author.Entity
  }
}

/**
 * Styled Component
 */

const StyledContainer = styled.div`
  ${({ themes }: { themes: Theme }) => {
    const { spacing } = themes
    return css`
      display: flex;
      padding: ${spacing(4)} ${spacing(4)} ${spacing(6)};
    `
  }}
`

const StyledAuthorImage = styled.img`
  ${({ themes }: { themes: Theme }) => {
    const { spacing } = themes
    return css`
      width: 4rem;
      height: 4rem;
      border-radius: 2rem;
      margin-right: ${spacing(2)};
    `
  }}
`

const StyledAuthorName = styled.h3`
  ${({ themes }: { themes: Theme }) => {
    const { palette, spacing } = themes
    return css`
      color: ${palette.grey[800]};
      margin: 0 0 ${spacing(4)};
    `
  }}
`

const StyledAuthorDescription = styled.div`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      color: ${palette.grey[600]};
    `
  }}
`
const StyledAuthorMeta = styled.div`
  display: flex;
  margin-top: 1rem;
`

// FIXME: 汎用かする
const StyledAuthorMetaLink = styled.a`
  ${({ themes }: { themes: Theme }) => {
    const { palette } = themes
    return css`
      display: inline-flex;
      margin-right: 0.5rem;
      width: 1.75rem;
      height: 1.75rem;
      justify-content: center;
      align-items: center;
      border-radius: 0.25rem;
      :link {
        background-color: ${palette.grey[50]};
        border: 1px solid ${palette.grey[300]};
        color: ${palette.grey[700]};
      }
      :visited {
        background-color: ${palette.grey[50]};
        border: 1px solid ${palette.grey[300]};
        color: ${palette.grey[700]};
      }
      :hover {
        background-color: ${palette.common.white};
        border: 1px solid ${palette.grey[400]};
        color: ${palette.grey[800]};
      }
      :active {
        background-color: ${palette.grey[100]};
        border: 1px solid ${palette.grey[500]};
        color: ${palette.grey[900]};
      }
    `
  }}
`

const StyledAuthorIcon = styled.span`
  display: inline-block;
  width: 1rem;
`

/**
 * Generic Component
 */

export const ArticleAuthor: FC<ArticleAuthorProps> = props => {
  const {
    state: {
      author: { name, description, imageUrl, metadata }
    }
  } = props
  const themes = useTheme()

  return (
    <aside>
      <StyledContainer themes={themes}>
        <StyledAuthorImage themes={themes} alt={name} src={imageUrl} />
        <div>
          <StyledAuthorName themes={themes}>{name}</StyledAuthorName>
          <StyledAuthorDescription themes={themes}>
            {richTextToReactComponents(description)}
          </StyledAuthorDescription>
          <StyledAuthorMeta>
            {Object.keys(metadata).map((key: string, index: number) => {
              const objKey: keyof Domain.Author.AuthorMetadata = key
              const meta = metadata[objKey]

              return (
                <div key={index}>
                  {objKey === 'github' && (
                    <StyledAuthorMetaLink
                      themes={themes}
                      href={meta.url}
                      title="Github"
                    >
                      <StyledAuthorIcon>
                        <Icon prefix="fab" name="github" size="1x" />
                      </StyledAuthorIcon>
                    </StyledAuthorMetaLink>
                  )}
                  {objKey === 'twitter' && (
                    <StyledAuthorMetaLink
                      themes={themes}
                      href={meta.url}
                      title="Twitter"
                    >
                      <StyledAuthorIcon>
                        <Icon prefix="fab" name="twitter" size="1x" />
                      </StyledAuthorIcon>
                    </StyledAuthorMetaLink>
                  )}
                </div>
              )
            })}
          </StyledAuthorMeta>
        </div>
      </StyledContainer>
    </aside>
  )
}
