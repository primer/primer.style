import React from 'react'
import {Box, BaseStyles, theme} from '@primer/components'
import {ThemeProvider} from 'emotion-theming'

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
