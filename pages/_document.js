import React from 'react'
import Document, {Head, Main, NextScript} from 'next/document'
import {ServerStyleSheet} from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({renderPage}) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    return {
      ...page,
      renderedStyles: sheet.getStyleElement()
    }
  }

  render() {
    const {files, renderedStyles} = this.props

    return (
      <html lang="en">
        <Head>
          <title>Primer Design System</title>
          <meta name="keywords" content="Design System" />
          <meta property="og:article:author" content="GitHub Design Systems team" />
          <meta property="og:title" content="Primer" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://primer.style" />
          <meta property="og:description" content="The design system that powers GitHub" />
          <meta
            property="og:image"
            content="https://user-images.githubusercontent.com/10384315/53922681-2f6d3100-402a-11e9-9719-5d1811c8110a.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@githubprimer" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126681523-1" />
          <link rel="stylesheet" href="https://unpkg.com/@primer/css/dist/layout.css" />
          {renderedStyles}
        </Head>
        <body data-files={JSON.stringify(files)}>
          <div id="root" className="overflow-hidden">
            <Main />
            <NextScript />
          </div>
        </body>
      </html>
    )
  }
}
