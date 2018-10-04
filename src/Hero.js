import React from 'react'
import {Box, Heading, Text, Link, FlexItem} from '@primer/components'
import HeroImage from './svg/Hero.svg'
import LinkLight from './LinkLight'
import IndexGrid from './IndexGrid'

const Hero = props => (
  <Box pt={[4,2,3]}>
    <IndexGrid my={[3, 3, 6]} flexDirection={[`row`, `row`, `row-reverse`]} alignItems="end">
        <FlexItem px={4} width={[10/12, 8/12, 6/12, 5/12]} mx={'auto'}>
          <Box mt={[2,3,5]} >
            <HeroImage />
          </Box>
        </FlexItem>
        <FlexItem px={4} my={[4,3,0]} width={[1, 1, 6/12, 7/12]}>
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
        </FlexItem>
      </IndexGrid>
  </Box>
)

export default Hero
