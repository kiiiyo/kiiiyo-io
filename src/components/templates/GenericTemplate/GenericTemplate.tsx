import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { useTheme, Theme } from '../../../libs/hooks/useTheme'

/**
 * Interface
 */

export interface GenericTemplateProps {
  headerBar?: React.ReactNode
  footer?: React.ReactNode
  children?: React.ReactNode
}

/**
 * Template component
 */

export const GenericTemplate: FC<GenericTemplateProps> = ({
  headerBar,
  footer,
  children
}) => {
  const themes = useTheme()
  return (
    <StyledContainer>
      {headerBar && <StyledHeaderBar>{headerBar}</StyledHeaderBar>}
      {children && (
        <StyledContent>
          <StyledContentInner themes={themes}>{children}</StyledContentInner>
        </StyledContent>
      )}
      {footer && <StyledFooter>{footer}</StyledFooter>}
    </StyledContainer>
  )
}

/**
 * Styled component
 */

const StyledContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: 64px auto 64px;
  grid-template-areas:
    'pageHeader'
    'pageContent'
    'pageFooter';
`
const StyledHeaderBar = styled.div`
  grid-area: pageHeader;
  width: 100%;
  z-index: 1000;
  position: fixed;
`

const StyledContent = styled.div`
  grid-area: pageContent;
  width: 100%;
`

const StyledContentInner = styled.div<{ themes: Theme }>`
  ${({ themes }: { themes: Theme }) => {
    const { breakpoint, spacing } = themes
    return css`
      margin: 0 auto;
      padding: ${spacing(8)} ${spacing(4)};
      width: 736px;

      @media (max-width: ${breakpoint.sm}) {
        width: calc(100% - 2rem);
      }
    `
  }}
`

const StyledFooter = styled.div`
  grid-area: pageFooter;
  width: 100%;
`
