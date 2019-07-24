import React from 'react'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import Helmet from 'react-helmet'
import {theme, BaseStyles, Box} from '@primer/components'
// import {Header, ResponsiveJumpNav, JumpNav} from '@primer/blueprints'

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
const Anchor = styled.div`
  display: block;
  position: relative;
  top: -70px;
  visibility: hidden;
`

export default function Layout({children, pageContext, ...rest}) {
  // eslint-disable-next-line no-console
  console.warn('Layout pageContext:', pageContext)
  const {title} = pageContext.frontmatter || {}
  return (
    <>
      <Helmet>
        <title>{title || '?'}</title>
        <meta name="keywords" content="Design System" />
        <meta property="og:article:author" content="GitHub Design Systems team" />
        <meta property="og:title" content="Primer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://primer.style" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
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
      </Helmet>
      <BaseStyles fontSize={2} style={{fontFamily: theme.fonts.normal}}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Box bg="black" color="blue.2" {...rest}>
            <header id="Header" root="https://primer.style" title="Primer" subtitle="Blueprints">
              <div id="JumpNav" />
            </header>
            {children}
            <Anchor id="jumpnav" />
            <Box display={['block', 'block', 'block', 'none']}>
              <div id="ResponsiveJumpNav" />
            </Box>
          </Box>
        </ThemeProvider>
      </BaseStyles>
    </>
  )
}
