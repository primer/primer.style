import React from 'react'
import {Flex, Link, Sticky, StyledOcticon} from '@primer/components'
import {Link as GatsbyLink} from 'gatsby'
import {MarkGithub} from '@primer/octicons-react'
import NavDropdown from './NavDropdown'
import NavItem from './NavItem'

const NavLink = props => <Link color="blue.2" as={GatsbyLink} {...props} />
const DropdownLink = props => <NavItem as={GatsbyLink} {...props} />

export default function Header(props) {
  return (
    <Sticky {...props}>
      <Flex bg="black" px={5} py={3} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <StyledOcticon color="blue.4" icon={MarkGithub} size="medium" mr={3} />
          <Link as={GatsbyLink} to="/" mr={4} color="blue.4" fontFamily="mono">
            Primer
          </Link>
        </Flex>
        <Flex as="nav" alignItems="center">
          <NavLink to="/news" ml={4}>What’s new</NavLink>
          <NavDropdown title="Design" ml={4}>
            <DropdownLink to="/design">Interface guidelines</DropdownLink>
            <DropdownLink to="https://octicons.github.com">Octicons</DropdownLink>
            <DropdownLink to="/css/tools/prototyping">Prototyping</DropdownLink>
          </NavDropdown>
          <NavDropdown title="Development" ml={4}>
            <DropdownLink to="/css">Primer CSS</DropdownLink>
            <DropdownLink to="/components">Primer Components</DropdownLink>
          </NavDropdown>
          <NavLink to="/about" ml={4}>About</NavLink>
        </Flex>
      </Flex>
    </Sticky>
  )
}
