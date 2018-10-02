import React from 'react'

const NavLink = props => (
  <Link color="blue.3" fontSize={1} mx={3} href={props.href}>
    {props.title}
  </Link>
)

export default NavLink
