// Extends Link from primer/components to make color primitives available. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.

import {Link, themeGet} from '@primer/react'
import styled from 'styled-components'

const LinkPromo = styled(Link)`
  color: ${themeGet('colors.orange.3')} !important;
`

export default LinkPromo
