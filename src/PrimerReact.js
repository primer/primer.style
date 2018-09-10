import React from 'react'
import {Box, Heading, Text, Link, FlexContainer} from 'primer-react'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'
import LinkLight from './LinkLight'
import ReactIcon from './ReactIcon'



const PrimerReact = props => (

  <Box align="center" px={4} className="container-lg">
    <ReactIcon />
    <Heading fontSize={5} mt={2} mb={2} color="blue.4">
      Primer React
      <Text fontSize={2} ml={1} className="v-align-text-top">BETA</Text>
    </Heading>
    <Text is='p' color="blue.2" mb={4} mx={[-2,0]} fontSize={[2,3]}>We&#8217;re building a React.js component library for Primer. Public beta coming soon!</Text>
    <FlexContainer width={[1, 10/12]} mx={'auto'} alignItems="center" className="flex-justify-center flex-wrap flex-md-nowrap">
        <LinkLight fontSize={2} mx={2} mt={-2} mb={[3,0]} href="https://primer.github.io/primer-react/">View component library</LinkLight>
        <Link mx={2} mb={[3,0]} href="https://codesandbox.io/s/1o7v0ryy3q?hidenavigation=1">
          <img alt="Edit on Code Sandbox" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </Link>
    </FlexContainer>
  </Box>

)

export default PrimerReact
