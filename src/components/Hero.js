import React from 'react'
import {Box, Heading, Text, Flex, Relative} from '@primer/components'
import LinkLight from './LinkLight'
import IndexGrid from './IndexGrid'
import {ReactComponent as HeroImage} from '../svg/Hero.svg'

const DOT = '・'

export default function Hero() {
  return (
    <Box pt={[4, 2, 5]}>
      <IndexGrid my={[6, 6, 12]} flexDirection={['row', 'row', 'row-reverse']} alignItems="end">
        <Flex.Item px={5} as={Box} width={[10 / 12, 8 / 12, 8 / 12, 5 / 12]} mx="auto">
          <Relative mt={[2, 3, 5]}>
            <HeroImage width="100%" height={null} />
          </Relative>
        </Flex.Item>
        <Flex.Item as={Box} px={5} my={[4, 3, 0]} width={[1, 1, 1, 7 / 12]}>
          <Heading color="blue.4" mb={2} fontSize={[48, 56, 84]} fontWeight="bold">
            Primer
          </Heading>
          <Text as="div" color="blue.1" fontSize={[4, 5, 5, 6]} lineHeight={1.25} mb={3}>
            Design, build, and create with GitHub’s design system
          </Text>
          <Text as="div" color="blue.2">
            Primer was created for GitHub by GitHub. We love it so much, we chose to open-source it to allow the
            community to design and build their own projects with Primer.
          </Text>
          <Text fontFamily="mono" as="p" color="blue.3" mt={5}>
            <LinkLight fontSize={[0, 1, 2]} href="/about">
              About
            </LinkLight>
            {DOT}
            <LinkLight ml={2} fontSize={[0, 1, 2]} href="https://github.com/primer/">
              Open-source
            </LinkLight>
            {DOT}
            <LinkLight ml={2} fontSize={[0, 1, 2]} href="https://spectrum.chat/primer">
              Community
            </LinkLight>
          </Text>
        </Flex.Item>
      </IndexGrid>
    </Box>
  )
}
