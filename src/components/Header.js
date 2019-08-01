import React from 'react'
import {Flex, Link, Sticky, StyledOcticon} from '@primer/components'
import {Link as GatsbyLink} from 'gatsby'
import {MarkGithub} from '@primer/octicons-react'
import GlobalNav from './GlobalNav'

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
          <GlobalNav />
        </Flex>
      </Flex>
    </Sticky>
  )
}
