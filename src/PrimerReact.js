import React from 'React'
import {Box, Heading, Text, Link} from 'primer-react'
import ButtonFill from './ButtonFill'
import ButtonOutline from './ButtonOutline'
import LinkLight from './LinkLight'
import ReactIcon from './ReactIcon'



const PrimerReact = props => (

  <Box align="center" width={[1, 1, 6/12]} className="container-xl p-responsive">
    <ReactIcon />
    <Heading fontSize={5} mt={2} mb={2} color="blue.4">
      Primer React
      <Text fontSize={2} ml={1} className="v-align-text-top">BETA</Text>
    </Heading>
    <Text is='p' color="blue.2" mb={4} fontSize={3}>Were building a React.js component library for Primer. Check out the beta and let us know what you think.</Text>
    <ButtonOutline fontSize={3} href="https://primer.github.io/primer-react/">Component library</ButtonOutline>
    <Text is="p" fontSize={2} mt={4} color="blue.3" className="text-mono">npm i @primer/components@1.0.0-beta</Text>
  </Box>

)

export default PrimerReact
