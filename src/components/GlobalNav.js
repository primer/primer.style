import React from 'react'
import {Link, Text} from '@primer/components'
import {Link as GatsbyLink} from 'gatsby'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const NavLink = props => <Link color="blue.2" as={GatsbyLink} {...props} />

export default function GlobalNav({navProps = {ml: 4}}) {
  return (
    <>
      <NavLink to="/news" {...navProps}>
        <Text display={['block', 'block', 'none']}>News</Text>
        <Text display={['none', 'none', 'block']}>What’s new</Text>
      </NavLink>
      <NavDropdown title="Design" {...navProps}>
        <NavItem href="https://primer.style/design">
          Interface guidelines
        </NavItem>
        <NavItem href="https://octicons.github.com">Octicons</NavItem>
        <NavItem href="https://primer.style/css/tools/prototyping">
          Prototyping
        </NavItem>
      </NavDropdown>
      <NavDropdown title="Develop" {...navProps}>
        <NavItem href="https://primer.style/css">
          Primer CSS
        </NavItem>
        <NavItem href="https://primer.style/components">
          Primer Components
        </NavItem>
      </NavDropdown>
      <NavLink to="/about" {...navProps}>
        About
      </NavLink>
    </>
  )
}
