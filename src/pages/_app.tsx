import App, { AppContext, AppProps } from 'next/app'
import React from 'react'
import Router from 'next/router'
//
import { themeStyle, globalStyle } from '../styles'
import { ThemeProvider } from '../libs/contexts/ThemeContext'

const theme = themeStyle.createTheme()
const GlobalStyle = globalStyle.createStyle
const gaTrackingId = process.env.GA_TRACKING_ID || ''

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

  componentDidMount() {
    Router.events.on('routeChangeComplete', () => {
      setTimeout(() => {
        window.gtag('config', gaTrackingId, {
          // eslint-disable-next-line @typescript-eslint/camelcase
          page_title: window.document.title,
          // eslint-disable-next-line @typescript-eslint/camelcase
          page_location: window.location.href
        })
      }, 0)
    })
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
