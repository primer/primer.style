import {Box, themeGet, ThemeProvider} from '@primer/react'
import {Head, Header} from '@primer/gatsby-theme-doctocat'
import '@primer/css/layout/index.scss'
import React from 'react'

export default function Layout({pageContext, children, colorMode}) {
  return (
    <ThemeProvider colorMode={colorMode || 'night'} nightScheme="dark_dimmed">
      <Head title={pageContext.frontmatter.title} description={pageContext.frontmatter.description} />
      <Header isSearchEnabled={false} />
      <Box sx={{backgroundColor: 'canvas.default', color: 'fg.default'}}>{children}</Box>
    </ThemeProvider>
  )
}

Layout.defaultProps = {
  pageContext: {
    frontmatter: {},
  },
}
