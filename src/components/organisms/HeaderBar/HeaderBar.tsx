import * as React from 'react'
import styled, { css } from 'styled-components'
import Link from 'next/link'
//
import { useTheme, Theme } from '../../../libs/hooks/useTheme'
//
import { Logotype } from '../../atoms'

/**
 * Generic Component
 */

export const HeaderBar: React.FC = () => {
  const themes = useTheme()
  return (
    <StyledHeaderBar themes={themes}>
      <StyledHeaderBarInner themes={themes}>
        <StyledLogotypeContainer>
          <Logotype>
            <Link href="/">
              <StyledLink themes={themes}>Kiiiyo&#39;s IO</StyledLink>
            </Link>
          </Logotype>
        </StyledLogotypeContainer>
      </StyledHeaderBarInner>
    </StyledHeaderBar>
  )
}

/**
 * Styled Component
 */

const StyledHeaderBar = styled.header`
  ${({ themes }: { themes: Theme }) => {
    const { palette, shadow } = themes
    return css`
      background-color: ${palette.common.white};
      box-shadow: ${shadow[3]};
    `
  }}
`

const StyledHeaderBarInner = styled.div<{ themes: Theme }>`
  ${({ themes }: { themes: Theme }) => {
    const { spacing, breakpoint } = themes
    return css`
      display: flex;
      padding: 0 ${spacing(4)};
      margin: 0 auto;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 64px;
      width: 960px; /* 992 */
      @media (max-width: ${breakpoint.md}) {
        width: 100%;
        padding: 0 ${spacing(4)};
      }
    `
  }}
`

const StyledLogotypeContainer = styled.div`
  margin-right: auto;
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
