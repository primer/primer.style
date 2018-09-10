import React from 'react'
import {Box, Heading, Text, Link} from 'primer-react'
import HeroImage from './svg/Hero.svg'
import LinkLight from './LinkLight'

const Hero = props => (
  <Box pt={[4,2,3]} px={4}>
    <Box my={[3, 3, 6]} mx={'auto'} className='container-xl'>
      <Box className="d-flex flex-wrap flex-items-end flex-md-nowrap flex-md-row-reverse">
        <Box width={[10/12, 8/12, 6/12, 5/12]} pl={[4, 4, 5]} pr={[3,3, 0]} pt={[2,3,5]} mx={'auto'}>
          <HeroImage />
        </Box>
        <Box my={[4,3,0]} width={[1, 1, 6/12, 7/12]} pr={[0,3,2]} >
          <Heading color="blue.4" mb={3} fontSize={[48, 56, 84]} fontWeight='bold'>Primer</Heading>
          <Text color="blue.2" fontSize={[4,5,5,7]} lineHeight={1.25}>Resources, tooling, and design guidelines for building interfaces with GitHub’s design system</Text>
          <Text is="p" color="blue.3" mt={4} className="text-mono">
            <LinkLight fontSize={[0,1,2]}
            href='https://styleguide.github.com/primer/'>
            Style guide
            </LinkLight> ・
            <LinkLight ml={2} fontSize={[0,1,2]}
            href='https://spectrum.chat/primer'>
            Community
            </LinkLight> ・
            <LinkLight ml={2} fontSize={[0,1,2]}
            href='https://github.com/primer/'>
            Open-source
            </LinkLight>
          </Text>
        </Box>
      </Box>

    </Box>
  </Box>
)

export default Hero
