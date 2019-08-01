import React from 'react'
import {Flex, Link, Sticky, StyledOcticon} from '@primer/components'
import {Link as GatsbyLink} from 'gatsby'
import {MarkGithub} from '@primer/octicons-react'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const NavLink = props => <Link color="blue.2" as={GatsbyLink} {...props} />

export default function Header(props) {
  return (
    <Sticky zIndex={100} {...props}>
      <Flex bg="black" px={5} py={3} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <StyledOcticon color="blue.4" icon={MarkGithub} size="medium" mr={3} />
          <Link as={GatsbyLink} to="/" mr={4} color="blue.4" fontFamily="mono">
            Primer
          </Link>
        </Flex>
        <Flex as="nav" alignItems="center">
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
        </Flex>
      </Flex>
    </Sticky>
  )
}
