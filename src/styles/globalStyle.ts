import { createGlobalStyle } from 'styled-components'
//
import { COLOR, TYPOGRAPHY } from '../constants'

export const createStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    font-size: ${TYPOGRAPHY.FONT_SIZE_DESKTOP_200}; /* 16px */
    padding: 0;
    margin: 0;
    font-family: ${TYPOGRAPHY.FONT_TYPEFACES};
    background-color: ${COLOR.GRAY_50}
  }
  #__next{
    height: 100%;
  }
`
