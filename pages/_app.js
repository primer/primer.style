import React from 'react'
import App, {Container} from 'next/app'
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import {theme, BaseStyles, Box} from '@primer/components'
import {Header, ResponsiveJumpNav, JumpNav} from '@primer/blueprints'
import {initDraggables} from '../src/draggable'

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

export default class MyApp extends App {
  static async getInitialProps({Component, ctx}) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return {pageProps}
  }

  componentDidMount() {
    initDraggables()
  }

  componentDidUpdate() {
    initDraggables()
  }

  render() {
    const {Component, pageProps} = this.props
    return (
      <BaseStyles fontSize={2} style={{fontFamily: theme.fonts.normal}}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Box bg="black" color="blue.2">
            <Header root="https://primer.style" title="Primer" subtitle="Blueprints">
              <JumpNav />
            </Header>
            <Container>
              <Component {...pageProps} />
            </Container>
            <Anchor id="jumpnav" />
            <Box display={['block', 'block', 'block', 'none']}>
              <ResponsiveJumpNav />
            </Box>
          </Box>
        </ThemeProvider>
      </BaseStyles>
    )
  }
}
