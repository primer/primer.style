import React from 'react'
import {Box, theme} from '@primer/components'
import {ThemeProvider} from 'emotion-theming'

const Page = props => (
  <ThemeProvider theme={theme}>
    <Box bg='black' color='blue.2'>
      {props.children}
    </Box>
  </ThemeProvider>
)

export default Page
