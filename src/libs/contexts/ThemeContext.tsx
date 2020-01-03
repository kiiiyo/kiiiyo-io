import { createContext } from 'react'

import { themeStyle } from '../../styles/'

type ThemeValue = themeStyle.CreatedTheme

interface ThemeProviderProps {
  value: themeStyle.CreatedTheme
}

/**
 * ThemeContext API
 */

export const ThemeContext = createContext<ThemeValue>(themeStyle.createTheme())

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
  const { value, children } = props

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const ThemeConsumer = ThemeContext.Consumer

export default ThemeContext
