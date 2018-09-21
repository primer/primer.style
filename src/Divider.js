import {Box} from '@primer/components'
import {
  color
} from 'styled-system'
import styled from 'react-emotion'

const Divider = styled(Box)`
  border-top: 2px solid ${props => props.theme.colors.blue[3]};
  opacity: 0.15;
  width: 10%;
  margin-right: auto;
  margin-left: auto;
`
export default Divider
