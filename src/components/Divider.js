import {Box, themeGet} from '@primer/react'
import styled from 'styled-components'

const Divider = styled(Box)`
  border-top: 2px solid ${themeGet('colors.blue.3')};
  opacity: 0.15;
  width: 10%;
  margin-right: auto;
  margin-left: auto;
`
export default Divider
