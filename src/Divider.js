import {Box} from '@primer/components'
import {themeGet} from 'styled-system'
import styled from 'react-emotion'

const Divider = styled(Box)`
  border-top: 2px solid ${themeGet('colors.blue.3')};
  opacity: 0.15;
  width: 10%;
  margin-right: auto;
  margin-left: auto;
`
export default Divider
