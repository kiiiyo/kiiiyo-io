import { FC } from 'react'
import styled, { css } from 'styled-components'
//
import { useTheme, Theme } from '../../../libs/hooks/useTheme'

/**
 * Interface
 */

type DividerSizeType = 'small' | 'medium' | 'large'
type DividerOrientationType = 'horizontal' | 'vertical'

interface DividerPops {
  size?: DividerSizeType
  orientation?: DividerOrientationType
}

/**
 * Generic Component
 */

export const Divider: FC<DividerPops> = props => {
  const theme = useTheme()
  return <StyledDivider theme={theme} {...props} />
}

/**
 * Styled Component
 */

const setDividerSizeStyle = (
  size?: DividerSizeType,
  orientation?: DividerOrientationType
) => {
  if (
    (!size || size === 'small') &&
    (!orientation || orientation === 'horizontal')
  ) {
    return css`
      height: 1px;
    `
  } else if (
    size === 'medium' &&
    (!orientation || orientation === 'horizontal')
  ) {
    return css`
      height: 2px;
    `
  } else if (
    size === 'large' &&
    (!orientation || orientation === 'horizontal')
  ) {
    return css`
      height: 4px;
    `
  } else if ((!size || size === 'small') && orientation === 'vertical') {
    return css`
      width: 1px;
      height: 100%;
    `
  } else if (
    size === 'medium' &&
    (!orientation || orientation === 'vertical')
  ) {
    return css`
      width: 2px;
      height: 100%;
    `
  } else if (size === 'large' && (!orientation || orientation === 'vertical')) {
    return css`
      width: 4px;
      height: 100%;
    `
  }
}

const StyledDivider = styled.hr`
  ${({
    theme,
    size,
    orientation
  }: {
    theme: Theme
    size?: DividerSizeType
    orientation?: DividerOrientationType
  }) => {
    const { palette } = theme
    return css`
      border: none;
      flex-shrink: 0;
      background-color: ${palette.grey[100]};
      ${setDividerSizeStyle(size, orientation)}
    `
  }}
`
