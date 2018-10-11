import React from 'react'
import {Box, BaseStyles, theme} from '@primer/components'
import {ThemeProvider} from 'emotion-theming'
import {injectGlobal} from 'emotion'
import {initDraggables} from '../src/draggable'

injectGlobal`
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
      <BaseStyles>
        <ThemeProvider theme={theme}>
          <Box bg="black" color="blue.2">
            {children}
          </Box>
        </ThemeProvider>
      </BaseStyles>
    )
  }
}
