// Extends Link from primer-react to make color primitives available, as well as fontSize and space which should be added in primer-react. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.

import {Link} from '@primer/components'
import {
  color,
  fontSize,
  fontWeight
} from 'styled-system'
import styled from 'react-emotion'

const LinkDark = styled(Link)`
  color: ${props => props.theme.colors.black} !important;
  &:hover {
    color: ${props => props.theme.colors.gray[8]};
  }
  ${fontSize}
  ${fontWeight}
`

export default LinkDark
