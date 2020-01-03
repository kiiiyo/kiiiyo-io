import { COLOR } from '../constants'

export interface PaletteProperty {
  common: {
    black?: string
    white?: string
  }
  grey: {
    50: string
    100: string
    200: string
    300: string
    400: string
    500: string
    600: string
    700: string
    800: string
    900: string
  }
}

export const defaultPalette = {
  common: {
    black: COLOR.BLACK,
    white: COLOR.WHITE
  },
  grey: {
    50: COLOR.GRAY_50,
    100: COLOR.GRAY_100,
    200: COLOR.GRAY_200,
    300: COLOR.GRAY_300,
    400: COLOR.GRAY_400,
    500: COLOR.GRAY_500,
    600: COLOR.GRAY_600,
    700: COLOR.GRAY_700,
    800: COLOR.GRAY_800,
    900: COLOR.GRAY_900
  }
}
