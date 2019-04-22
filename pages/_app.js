import React from 'react'
import {Box, BaseStyles, theme} from '@primer/components'
import {ThemeProvider, createGlobalStyle} from 'styled-components'
import {initDraggables} from '../src/draggable'

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
              {children}
            </Box>
          </BaseStyles>
        </ThemeProvider>
      </div>
    )
  }
}
