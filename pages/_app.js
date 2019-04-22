import React from 'react'
import {Box, BaseStyles, theme} from '@primer/components'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import {initDraggables} from '../src/draggable'
import styled from 'styled-components'
import {Header, JumpNav, ResponsiveJumpNav} from '@primer/blueprints'
import Hero from '../src/Hero'
import HiringPromo from '../src/HiringPromo'
import PrimerCSS from '../src/PrimerCSS'
import Divider from '../src/Divider'
import AtomPlugins from '../src/AtomPlugins'
import OcticonsPromo from '../src/OcticonsPromo'
import OpenSource from '../src/OpenSource'
import PrimerReact from '../src/PrimerReact'

const Anchor = styled.div`
  display: block;
  position: relative;
  top: -70px;
  visibility: hidden;
`


const GlobalStyle = createGlobalStyle`
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export default class Page extends React.Component {
  componentDidMount() {
    initDraggables()
  }

  componentDidUpdate() {
    initDraggables()
  }

  render() {
    const {children} = this.props
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <BaseStyles style={{fontFamily: theme.fonts.normal}}>
            <Box bg="black" color="blue.2">
              <Header root="https://primer.style" title="Primer" subtitle="Blueprints" next>
                <JumpNav />
              </Header>
              <Hero />
              <Divider my={[9, 12]} />
              <HiringPromo />
              <Divider my={[9, 12]} />
              <PrimerCSS />
              <Divider my={[9, 12]} />
              <PrimerReact />
              <Divider my={[9, 12]} />
              <AtomPlugins />
              <Divider my={[9, 12]} />
              <OcticonsPromo />
              <OpenSource />
              <Anchor id="jumpnav" />
              <Box display={['block', 'block', 'block', 'none']}>
                <ResponsiveJumpNav />
              </Box>
            </Box>
          </BaseStyles>
        </ThemeProvider>
      </div>
    )
  }
}
