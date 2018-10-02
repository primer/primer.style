import React from 'react'
import {Box, Heading, Text, Link} from '@primer/components'
import HeroImage from './svg/Hero.svg'

const Hero = props => (
  <Box pt={[4,2,3]}>
    <Box my={[3, 3, 6]} mx={'auto'} px={4} className='container-xl'>
      <Box className="d-flex flex-wrap flex-items-end flex-md-nowrap flex-md-row-reverse" mx={-4}>
        <Box px={4} width={[10/12, 8/12, 6/12, 5/12]} mx={'auto'}>
          <Box mt={[2,3,5]} >
            <HeroImage />
          </Box>
        </Box>
        <Box px={4} my={[4,3,0]} width={[1, 1, 6/12, 7/12]}>
          <Heading color="blue.4" mb={2} fontSize={[48, 56, 84]} fontWeight='bold'>Primer</Heading>
          <Text color="blue.2" fontSize={[4,5,5,7]} lineHeight={1.25}>Resources, tooling, and design guidelines for building interfaces with GitHub’s design system</Text>
          <Box mt={4}>
            <Link color="blue.3" fontFamily="mono" fontSize={[0,1,2]}
              href='https://styleguide.github.com/primer/'>
              Style guide
            </Link> ・
            <Link color="blue.3" fontFamily="mono" ml={2} fontSize={[0,1,2]}
              href='https://spectrum.chat/primer'>
              Community
            </Link> ・
            <Link fontFamily="mono" color="blue.3" ml={2} fontSize={[0,1,2]}
              href='https://github.com/primer/'>
              Open-source
            </Link>
          </Box>
        </Box>
      </Box>

    </Box>
  </Box>
)

export default Hero
