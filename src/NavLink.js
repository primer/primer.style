import React from 'React'
import LinkLight from './LinkLight'

const NavLink = props => (
  <LinkLight fontSize={1} mx={3} href={props.href}>
    {props.title}
  </LinkLight>
)

export default NavLink
