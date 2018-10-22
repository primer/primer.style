// Extends Link from primer/components to make color primitives available, as well as fontSize and space which should be added in primer/components. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.

import {Link} from '@primer/components'
import {space, themeGet} from 'styled-system'
import styled from 'react-emotion'

const ButtonFillDark = styled(Link)`
  color: ${themeGet('colors.blue.2')} !important;
  background-color: ${themeGet('colors.black')};
  padding: 0.75em 1.25em;
  font-size: ${props => props.theme.fontSizes[2]};
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  &:hover {
    color: ${themeGet('colors.white')} !important;
    background-color: ${themeGet('colors.gray.9')};
    text-decoration: none;
  }
  ${space};
`

export default ButtonFillDark
