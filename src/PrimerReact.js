import React from 'React'
import {Box, Heading, Text, Link} from 'primer-react'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'
import LinkLight from './LinkLight'
import ReactIcon from './ReactIcon'



const PrimerReact = props => (

  <Box align="center" width={[1, 1, 8/12]} className="container-xl p-responsive">
    <ReactIcon />
    <Heading fontSize={5} mt={2} mb={2} color="blue.4">
      Primer React
      <Text fontSize={2} ml={1} className="v-align-text-top">BETA</Text>
    </Heading>
    <Text is='p' color="blue.2" mb={3} fontSize={3}>We&#8217;re building a React.js component library for Primer. Public beta coming soon!</Text>
    <LinkLight fontSize={2} href="https://primer.github.io/primer-react/">View component library →</LinkLight>
  </Box>

)

export default PrimerReact
