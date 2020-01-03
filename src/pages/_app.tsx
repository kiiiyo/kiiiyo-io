import App, { AppContext, AppProps } from 'next/app'
import React from 'react'
//
import { themeStyle, globalStyle } from '../styles'
import { ThemeProvider } from '../libs/contexts/ThemeContext'

const theme = themeStyle.createTheme()
const GlobalStyle = globalStyle.createStyle

export default class extends App {
  /**
   * Constructor
   */

  constructor(props: AppProps) {
    super(props)
  }

  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <ThemeProvider value={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </>
    )
  }
}
