import { BreakpointProperty, defaultBreakpoint } from './breakpoint'
import { PaletteProperty, defaultPalette } from './palette'
import { ShadowProperty, defaultShadow } from './shadow'
import { TypographyProperty, defaultTypography } from './typography'

export interface ThemeProperty {
  breakpoint: BreakpointProperty
  palette: PaletteProperty
  typography: TypographyProperty
  shadow: ShadowProperty
  spacing: (factor: number) => string
}

export interface CreatedTheme {
  breakpoint: BreakpointProperty
  palette: PaletteProperty
  typography: TypographyProperty
  shadow: ShadowProperty
  spacing: (factor: number) => string
}

export const createTheme = () => {
  const created: CreatedTheme = {
    breakpoint: defaultBreakpoint,
    palette: defaultPalette,
    typography: defaultTypography,
    shadow: defaultShadow,
    spacing: factor => `${0.25 * factor}rem`
  }
  return created
}
