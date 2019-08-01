import React from 'react'
import {Link} from '@primer/components'
import {Link as GatsbyLink} from 'gatsby'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const NavLink = props => <Link color="blue.2" as={GatsbyLink} {...props} />

export default function GlobalNav(props) {
  return <>
    <NavLink to="/news" ml={4}>
      What’s new
    </NavLink>
    <NavDropdown title="Design" ml={4}>
      <NavItem as={GatsbyLink} to="/design">
        Interface guidelines
      </NavItem>
      <NavItem href="https://octicons.github.com">Octicons</NavItem>
      <NavItem as={GatsbyLink} to="/css/tools/prototyping">
        Prototyping
      </NavItem>
    </NavDropdown>
    <NavDropdown title="Development" ml={4}>
      <NavItem as={GatsbyLink} to="/css">
        Primer CSS
      </NavItem>
      <NavItem as={GatsbyLink} to="/components">
        Primer Components
      </NavItem>
    </NavDropdown>
    <NavLink to="/about" ml={4}>
      About
    </NavLink>
  </>
}
