import React from 'react'
import {Box, Heading, Text, Link} from 'primer-react'
import HeroImage from './HeroImage'

const Hero = props => (
  <Box pt={[4,2,0]} px={4}>
    <Box my={[3, 3, 6]} mx={'auto'} className='container-xl d-flex flex-items-center flex-wrap flex-md-nowrap flex-md-row-reverse'>
      <Box px={3,6,0} width={[1, 10/12, 7/12]} m={'auto'}>
        <HeroImage />
      </Box>
      <Box my={[4,3,0]} width={[1, 1, 5/12]} pr={[0,3,5]} >
        <Heading color="blue.4" mb={3} fontSize={[48, 56, 64]} fontWeight='bold'>Primer</Heading>
        <Text color="blue.2" fontSize={[4,4,5]} lineHeight={1.25}>Resources, tooling, and design guidelines for building interfaces with GitHub’s design system</Text>
      </Box>
    </Box>
  </Box>
)

export default Hero
