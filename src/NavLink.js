import React from 'React'
import LinkLight from './LinkLight'

const NavLink = props => (
  <LinkLight fontSize={1} ml={3}>
    {props.title}
  </LinkLight>
)

export default NavLink
