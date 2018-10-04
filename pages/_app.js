import React from 'react'
import {Box, BaseStyles} from '@primer/components'
import {ThemeProvider} from 'emotion-theming'
import theme from '../src/theme.js'

const Page = props => (
  <BaseStyles>
    <ThemeProvider theme={theme}>
      <Box bg='black' color='blue.2'>
        {props.children}
      </Box>
    </ThemeProvider>
  </BaseStyles>
)

export default Page
