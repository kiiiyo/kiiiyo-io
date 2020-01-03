import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

import { themeStyle } from '../../styles/'

export type Theme = themeStyle.ThemeProperty

export const useTheme = () => {
  const theme = useContext(ThemeContext)
  return theme
}
