import React from 'react'
import {Box, Heading, Text, FlexItem, Absolute, Relative} from '@primer/components'
import HeroImage from './svg/Hero.svg'
import HeroOverlay from './svg/HeroOverlay.svg'
import LinkLight from './LinkLight'
import IndexGrid from './IndexGrid'

export default function Hero() {
  return (
    <Box pt={[4, 2, 5]}>
      <IndexGrid my={[6, 6, 12]} flexDirection={['row', 'row', 'row-reverse']} alignItems="end">
        <FlexItem px={5} width={[10 / 12, 8 / 12, 8 / 12, 5 / 12]} mx={'auto'}>
          <Relative mt={[2, 3, 5]}>
            <HeroImage width="100%" height={null} />
            <Absolute top={0} left={0} width="100%" height="100%" zIndex={100} css={{pointerEvents: 'none'}}>
              <HeroOverlay width="100%" height={null} />
            </Absolute>
          </Relative>
        </FlexItem>
        <FlexItem px={5} my={[4, 3, 0]} width={[1, 1, 1, 7 / 12]}>
          <Heading color="blue.4" mb={2} fontSize={[48, 56, 84]} fontWeight="bold">
            Primer
          </Heading>
          <Text color="blue.2" fontSize={[4, 5, 5, 7]} lineHeight={1.25}>
            Resources, tooling, and design guidelines for building interfaces with GitHub’s design system
          </Text>
          <Text fontFamily="mono" is="p" color="blue.3" mt={5}>
            <LinkLight fontSize={[0, 1, 2]} href="https://styleguide.github.com/primer/">
              Style guide
            </LinkLight>{' '}
            ・
            <LinkLight ml={2} fontSize={[0, 1, 2]} href="https://spectrum.chat/primer">
              Community
            </LinkLight>{' '}
            ・
            <LinkLight ml={2} fontSize={[0, 1, 2]} href="https://github.com/primer/">
              Open-source
            </LinkLight>
          </Text>
        </FlexItem>
      </IndexGrid>
    </Box>
  )
}
