// Extends Link from primer-react to make color primitives available, as well as fontSize and space which should be added in primer-react. Ideally I'd use defaultProps here but because we use !important on utilities the theme colors won't override. We could probably add a function to handle this.

import {Link} from 'primer-react'
import {
  color,
  fontSize,
  space
} from 'styled-system'
import styled from 'react-emotion'

const ButtonOutlineDark = styled(Link)`
  color: ${props => props.theme.colors.blue[2]} !important;
  background-color: ${props => props.theme.colors.black};
  padding: .75em 1.25em;
  font-size: ${props => props.theme.fontSizes[2]};
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
  &:hover {
    color: ${props => props.theme.colors.white} !important;
    background-color: ${props => props.theme.colors.gray[9]};
    text-decoration: none;
  }
  ${space}
`

export default ButtonOutlineDark
