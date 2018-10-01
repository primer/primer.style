import React from 'react'
import {Box} from '@primer/components'
import {ThemeProvider} from 'emotion-theming'
import theme from '../src/theme.js'

const Page = props => (
  <ThemeProvider theme={theme}>
    <Box bg='black' color='blue.2'>
      {props.children}
    </Box>
  </ThemeProvider>
)

export default Page
