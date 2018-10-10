import React from 'react'
import {Box, Heading, Text, Link, FlexContainer, FlexItem, Relative} from '@primer/components'
import {FileCode, Ruby, Paintcan} from '@githubprimer/octicons-react'
import Octicon from './Octicon'
import OcticonsImage from './svg/Octicons.svg'
import LinkLight from './LinkLight'

export default function OcticonsPromo() {
  return (
    <Box pb={12} px={5}>
      <Box align="center" mb={8} mx="auto" className="container-xl">
        <Relative zIndex={100} mt={[4, 3, 0]} width={[1, 1, 1, 6 / 12]}>
          <Link href="http://octicons.github.com/" className="no-underline">
            <Heading lineHeight="1.25" color="blue.4" mb={2} fontSize={7} fontWeight="bold">
              Octicons
            </Heading>
          </Link>
          <Text is="p" color="blue.1" mb={[2, 3]} fontSize={[4, 5]}>
            Your project. GitHub&#8217;s icons.
          </Text>
          <Text fontSize={2} color="blue.3" fontFamily="mono">
            v8.1.0
          </Text>
        </Relative>
        <Box className="container-lg">
          <OcticonsImage width="100%" height={null} />
        </Box>
      </Box>

      <Box mx="auto" className="container-xl" color="blue.2">
        <FlexContainer flexWrap="wrap" mx={-5}>
          <Package icon={FileCode} href="https://github.com/primer/octicons/#ruby" title="JavaScript docs">
            Install the node.js or react.js package via npm to use with your JavaScript project
          </Package>

          <Package icon={Ruby} href="https://github.com/primer/octicons/#javascript" title="Ruby docs">
            Install the Ruby gem, Rails helper, or Jekyll plugin to use in your project
          </Package>

          <Package
            icon={Paintcan}
            href="https://www.figma.com/file/FP7lqd1V00LUaT5zvdklkkZr/Octicons/duplicate"
            title="Open in Figma"
          >
            Use SVG&#8217;s or Figma components in your design projects
          </Package>
        </FlexContainer>
      </Box>
    </Box>
  )
}

function Package({children, icon, href, title, ...rest}) {
  return (
    <FlexContainer width={[1, 1, 1, 1 / 3]} px={5} mb={[4, 5, 5, 0]} {...rest}>
      <FlexItem color="blue.3">
        <Box width={44}>
          <Octicon icon={icon} mr={3} height={40} verticalAlign="top" />
        </Box>
      </FlexItem>
      <FlexItem px={2}>
        <Text is="p" fontSize={2}>
          {children}
        </Text>
        <LinkLight display="inline-block" href={href}>
          {title} →
        </LinkLight>
      </FlexItem>
    </FlexContainer>
  )
}
