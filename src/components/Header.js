import React from 'react'
import {Box, Flex, Link, Sticky, StyledOcticon} from '@primer/components'
import {Link as GatsbyLink} from 'gatsby'
import {MarkGithub} from '@primer/octicons-react'
import GlobalNav from './GlobalNav'

export default function Header(props) {
  return (
    <>
      <Sticky bg="black" zIndex={100} {...props}>
        <Flex px={5} py={3} alignItems="center" justifyContent="space-between">
          <Flex alignItems="center">
            <StyledOcticon color="blue.4" icon={MarkGithub} size="medium" mr={3} />
            <Link as={GatsbyLink} to="/" mr={4} color="blue.4" fontFamily="mono">
              Primer
            </Link>
          </Flex>
          <Flex as="nav" alignItems="center" display={['none', 'none', 'flex']}>
            <GlobalNav navProps={{ml: 4}} />
          </Flex>
        </Flex>
        <Box as="nav" display={['block', 'block', 'none']}>
          <GlobalNav navProps={{display: 'block', ml: 4, mt: 2}} />
        </Box>
      </Sticky>
    </>
  )
}
