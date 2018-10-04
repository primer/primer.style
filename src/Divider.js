import {Box} from '@primer/components'
import {space, themeGet} from 'styled-system'
import styled from 'react-emotion'

const Divider = styled(Box)`
  border-top: 2px solid ${themeGet('colors.blue.3')};
  opacity: 0.15;
  width: 10%;
  ${space};
`

Divider.defaultProps = {
  mx: 'auto',
  my: [5, 6]
}

export default Divider
