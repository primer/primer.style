import React from 'react'
import BoxPro from '../src/BoxPro'
import {ThemeProvider} from 'emotion-theming'
import theme from '../src/theme.js'

const Page = props => (
  <ThemeProvider theme={theme}>
    <BoxPro bg='black' color='blue.2'>
      {props.children}
    </BoxPro>
  </ThemeProvider>
)

export default Page
