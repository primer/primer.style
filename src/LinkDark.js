// Extends Link from primer/components to make color primitives available. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.

import {Link} from '@primer/components'
import {fontSize, fontWeight, themeGet} from 'styled-system'
import styled from 'react-emotion'

const LinkDark = styled(Link)`
  color: ${themeGet('colors.black')} !important;
  &:hover {
    color: ${themeGet('colors.gray.8')};
  }
  ${fontSize};
  ${fontWeight};
`

export default LinkDark
