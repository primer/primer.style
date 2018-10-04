import React from 'react'
import {Box, BaseStyles, theme} from '@primer/components'
import {ThemeProvider} from 'emotion-theming'

import {initDraggables} from '../src/draggable'

export default class Page extends React.Component {
  componentDidMount() {
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
