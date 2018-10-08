import React from 'react'
import {Box, Heading, Text} from '@primer/components'
import LinkLight from './LinkLight'
import ReactIcon from './ReactIcon.svg'

export default function PrimerReact() {
  return (
    <Box align="center" px={5} className="container-lg">
      <ReactIcon />
      <Heading fontSize={5} mt={2} mb={2} color="blue.4">
        Primer React
        <Text fontSize={2} ml={1} className="v-align-text-top">
          BETA
        </Text>
      </Heading>
      <Text is="p" color="blue.2" mb={3} mx={[-2, 0]} fontSize={[2, 3]}>
        We&#8217;re building a React.js component library for Primer. Public beta coming soon!
      </Text>
      <LinkLight fontSize={2} href="https://primer.style/components">
        View the components →
      </LinkLight>
    </Box>
  )
}
