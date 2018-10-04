import React from 'react'
import {Box, BaseStyles} from '@primer/components'
import {ThemeProvider} from 'emotion-theming'
import theme from '../src/theme.js'

import '../src/behaviors'

const Page = props => (
  <ThemeProvider theme={theme}>
    <BaseStyles>
      <Box bg='black' color='blue.2'>
        {props.children}
      </Box>
    </BaseStyles>
  </ThemeProvider>
)

export default Page
