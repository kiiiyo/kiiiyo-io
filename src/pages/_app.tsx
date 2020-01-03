import App, { AppContext, AppProps } from 'next/app'
import React from 'react'
//
import { GlobalStyle } from '../styles'

const GlobalStylePresenter = GlobalStyle.createStyle

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
        <Component {...pageProps} />
        <GlobalStylePresenter />
      </>
    )
  }
}
