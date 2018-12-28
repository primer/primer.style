import React from 'react'
import {Box, Flex, Heading, Text, Link} from '@primer/components'
import LinkLight from './LinkLight'
import ReactIcon from './ReactIcon.svg'

export default function PrimerReact() {
  return (
    <Box align="center" px={5} className="container-lg">
      <ReactIcon />
      <Heading fontSize={[4, 5]} mt={2} mb={2} color="blue.4">
        Primer Components
        <Text fontSize={2} ml={1} css={{verticalAlign: 'text-top'}}>
          BETA
        </Text>
      </Heading>
      <Text is="p" color="blue.2" mb={3} mx={[-2, 0]} fontSize={[2, 3]}>
        We&#8217;re building a React.js component library for Primer.
      </Text>
      <Flex flexWrap="wrap" alignItems="center" justifyContent="center">
        <Link mb={[2,0]} px={2} lineHeight="1" href="https://codesandbox.io/s/82w8yp5359">
          <img alt="Check out Primer Components in CodeSandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </Link>
        <LinkLight fontSize={2} px={2} href="https://primer.style/components">
          View the component library →
        </LinkLight>
      </Flex>

    </Box>
  )
}
