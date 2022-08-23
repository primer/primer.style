import {Box, Heading, themeGet} from '@primer/components'
import '@primer/css/layout/index.scss'
import {Head, Header} from '@primer/gatsby-theme-doctocat'
import React from 'react'
import {createGlobalStyle} from 'styled-components'

// FIXME: this works around known issues with Heading's default prop {m: 0}
Object.assign(Heading.defaultProps, {
  m: null,
  mt: 0,
  mb: 0,
})

const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${themeGet('colors.white')}; 
    color: ${themeGet('colors.black')};
  }
`

export default function Layout({pageContext, children}) {
  return (
    <>
      <GlobalStyles />
      <Head title={pageContext.frontmatter.title} description={pageContext.frontmatter.description} />
      <Header isSearchEnabled={false} />
      <Box color="blue.2">{children}</Box>
    </>
  )
}

Layout.defaultProps = {
  pageContext: {
    frontmatter: {},
  },
}
