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
        <NavItem as={GatsbyLink} to="/design">
          Interface guidelines
        </NavItem>
        <NavItem href="https://octicons.github.com">Octicons</NavItem>
        <NavItem as={GatsbyLink} to="/css/tools/prototyping">
          Prototyping
        </NavItem>
      </NavDropdown>
      <NavDropdown title="Develop" {...navProps}>
        <NavItem as={GatsbyLink} to="/css">
          Primer CSS
        </NavItem>
        <NavItem as={GatsbyLink} to="/components">
          Primer Components
        </NavItem>
      </NavDropdown>
      <NavLink to="/about" {...navProps}>
        About
      </NavLink>
    </>
  )
}
