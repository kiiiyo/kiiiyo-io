import { TYPOGRAPHY } from '../constants'

type FontStyle = {
  fontSize: string
  fontWeight?: number
  lineHeight?: number
  letterSpacing?: string
}

export interface TypographyProperty {
  htmlFontSize: string
  fontSize: string
  display1: FontStyle
  display2: FontStyle
  display3: FontStyle
  h1: FontStyle
  h2: FontStyle
  h3: FontStyle
  h4: FontStyle
  h5: FontStyle
  h6: FontStyle
  body: FontStyle
  paragraph: FontStyle
}

const defaultHtmlFontSize = TYPOGRAPHY.FONT_SIZE_DESKTOP_200
const defaultFontSize = TYPOGRAPHY.FONT_SIZE_DESKTOP_200

export const defaultTypography = {
  htmlFontSize: defaultHtmlFontSize,
  fontSize: defaultFontSize,
  display1: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_900,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  display2: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_700,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  display3: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_500,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  h1: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_900,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  h2: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_700,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  h3: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_500,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  h4: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_300,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  h5: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_200,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  h6: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_100,
    fontWeight: 700,
    lineHeight: 1.5,
    letterSpacing: '.04em'
  },
  body: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_100,
    lineHeight: 1.5
  },
  paragraph: {
    fontSize: TYPOGRAPHY.FONT_SIZE_MOBILE_100,
    lineHeight: 1.5
  }
}
