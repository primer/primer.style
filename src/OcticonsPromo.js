import React from 'react'
import {Box, Heading, Text, Link, Flex, Relative} from '@primer/components'
import OcticonsImage from './svg/Octicons.svg'
import Octicon, {FileCode, Ruby, Paintcan} from '@githubprimer/octicons-react'
import LinkLight from './LinkLight'

export default function OcticonsPromo() {
  return (
    <Box pb={12} px={5}>
      <Box align="center" mb={8} className="container-xl mx-auto">
        <Relative zIndex={100} mt={[4, 3, 0]} width={[1, 1, 1, 6 / 12]}>
          <Link href="http://octicons.github.com/" className="no-underline">
            <Heading lineHeight="1.25" color="blue.4" mb={2} fontSize={7} fontWeight="bold">
              Octicons
            </Heading>
          </Link>
          <Text is="p" color="blue.1" mb={[2, 3]} fontSize={[4, 5]}>
            Your project. GitHub&#8217;s icons.
          </Text>
          <Text fontSize={2} color="blue.3" className="text-mono">
            v8.1.0
          </Text>
        </Relative>
        <Box className="container-lg">
          <OcticonsImage width="100%" height={null} />
        </Box>
      </Box>

      <Box className="container-xl mx-auto" color="blue.2">
        <Flex flexWrap="wrap" mx={-5}>
          <Package icon={FileCode} href="https://github.com/primer/octicons/#javascript" title="JavaScript docs">
            Install the node.js or react.js package via npm to use with your JavaScript project
          </Package>

          <Package icon={Ruby} href="https://github.com/primer/octicons/#ruby" title="Ruby docs">
            Install the Ruby gem, Rails helper, or Jekyll plugin to use in your project
          </Package>

          <Package
            icon={Paintcan}
            href="https://www.figma.com/file/FP7lqd1V00LUaT5zvdklkkZr/Octicons/duplicate"
            title="Open in Figma"
          >
            Use SVG&#8217;s or Figma components in your design projects
          </Package>
        </Flex>
      </Box>
    </Box>
  )
}

function Package({children, icon, href, title, ...rest}) {
  return (
    <Flex width={[1, 1, 1, 1 / 3]} px={5} mb={[4, 5, 5, 0]} {...rest}>
      <Flex.Item color="blue.3">
        <Box width={44}>
          <Octicon className="mr-3" icon={icon} height={40} verticalAlign="top" />
        </Box>
      </Flex.Item>
      <Flex.Item px={2}>
        <Text is="p" fontSize={2}>
          {children}
        </Text>
        <LinkLight className="d-inline-block" href={href}>
          {title} →
        </LinkLight>
      </Flex.Item>
    </Flex>
  )
}
