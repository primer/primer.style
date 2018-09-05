import React from 'React'
import {Box, Heading, Text, Link, FlexContainer, FlexItem} from 'primer-react'
import Image from './Image'
import CssImage from './CssImage'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'
import OcticonsImage from './OcticonsImage'
import Octicon, {FileCode, Ruby, Paintcan} from '@githubprimer/octicons-react'
import LinkLight from './LinkLight'


const OcticonsPromo = props => (
  <Box pb={4}>
    <Box align="center" mb={5} className='container-xl p-responsive mx-auto'>
      <Box mt={[4,3,0]} width={[1, 1, 6/12]} >
        <Link href="" className="no-underline"><Heading lineHeight="1.25" color="blue.4" mb={2} fontSize={7} fontWeight='bold'>Octicons</Heading></Link>
        <Text is='p' color="blue.1" mb={3} fontSize={5}>Your project. GitHub&#8217;s icons.</Text>

        <Text is="p" fontSize={2} color="blue.3" className="text-mono">v8.1.0</Text>
      </Box>
      <Box px={[0, 0, 3, 5]} pb={4}>
        <OcticonsImage />
      </Box>
    </Box>

    <Box className="container-xl p-responsive mx-auto" color="blue.2">
      <FlexContainer alignItems="center" className="gutter-lg-spacious flex-wrap">

        <FlexContainer width={[1, 1, 4/12]} px={[0, 2, 2, 4]} mb={[3, 4, 4, 0]}>
          <FlexItem color="blue.3">
            <Octicon className="mr-3" icon={FileCode} size='40' verticalAlign="top"/>
          </FlexItem>
          <FlexItem px={2}>
            <Text is="p" fontSize={2}>
              Install the node.js or react.js package via npm to use with your JavaScript project
            </Text>
            <LinkLight className="d-inline-block" href="https://github.com/primer/octicons/#ruby">JavaScript docs →</LinkLight>
          </FlexItem>
        </FlexContainer>

        <FlexContainer width={[1, 1, 4/12]} px={[0, 2, 2, 4]} mb={[3, 4, 4, 0]}>
          <FlexItem color="blue.3">
            <Octicon className="mr-3" icon={Ruby} size='40' verticalAlign="top"/>
          </FlexItem>
          <FlexItem px={2}>
            <Text is="p" fontSize={2}>
              Install the Ruby gem, Rails helper, or Jekyll plugin to use in your project
            </Text>
            <LinkLight className="d-inline-block" href="https://github.com/primer/octicons/#javascript">Ruby docs →</LinkLight>
          </FlexItem>
        </FlexContainer>

        <FlexContainer width={[1, 1, 4/12]} px={[0, 2, 2, 4]} mb={[3, 4, 4, 0]}>
          <FlexItem color="blue.3">
            <Octicon className="mr-3" icon={Paintcan} size='40' verticalAlign="top"/>
          </FlexItem>
          <FlexItem px={2}>
            <Text is="p" fontSize={2}>
              Use SVG&#8217;s or Figma components in your design projects
            </Text>
            <LinkLight className="d-inline-block" href="https://www.figma.com/file/FP7lqd1V00LUaT5zvdklkkZr/Octicons/duplicate">Open in Figma →</LinkLight>
          </FlexItem>
        </FlexContainer>

      </FlexContainer>
    </Box>

  </Box>
)

export default OcticonsPromo
