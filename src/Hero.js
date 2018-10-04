import React from 'react'
import {Box, Heading, Text, Link, Absolute, Relative} from '@primer/components'
import HeroImage from './svg/Hero.svg'
import Brush from './svg/Brush.svg'
import HeroOverlay from './svg/HeroOverlay.svg'
import LinkLight from './LinkLight'

const Hero = props => (
  <Box pt={[4,2,3]} id='hero'>
    <Box my={[3, 3, 6]} mx={'auto'} px={4} className='container-xl'>
      <Box className="d-flex flex-wrap flex-items-end flex-md-nowrap flex-md-row-reverse" mx={-4}>
        <Box px={4} width={[10/12, 8/12, 6/12, 5/12]} mx={'auto'}>
          <Box mt={[2,3,5]}>
            <Relative>
              <HeroImage />
              <Absolute top={0} left={0} width="100%" height="100%" zIndex={100} css={{pointerEvents: 'none'}}>
                <HeroOverlay />
              </Absolute>
            </Relative>
          </Box>
        </Box>
        <Relative zIndex={1} px={4} my={[4,3,0]} width={[1, 1, 6/12, 7/12]}>
          <Heading color="blue.4" mb={2} fontSize={[48, 56, 84]} fontWeight='bold'>Primer</Heading>
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
        </Relative>
      </Box>

    </Box>
  </Box>
)

export default Hero
