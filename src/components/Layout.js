import {Box, Heading} from '@primer/components'
import '@primer/css/layout/index.scss'
import {Head, Header} from '@primer/gatsby-theme-doctocat'
import React from 'react'

// FIXME: this works around known issues with Heading's default prop {m: 0}
Object.assign(Heading.defaultProps, {
  m: null,
  mt: 0,
  mb: 0
})

export default function Layout({pageContext, children}) {
  return (
    <>
      <Head title={pageContext.frontmatter.title} description={pageContext.frontmatter.description} />
      <Header isSearchEnabled={false} />
      <Box bg="black" color="blue.2">
        {children}
      </Box>
    </>
  )
}

Layout.defaultProps = {
  pageContext: {
    frontmatter: {}
  }
}
