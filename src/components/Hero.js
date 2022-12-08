import React from 'react'
import {Box, Heading, Text, Link} from '@primer/react'
import IndexGrid from './IndexGrid'
import {ReactComponent as HeroImage} from '../svg/Hero.svg'

export default function Hero() {
  return (
    <Box pt={[4, 2, 5]}>
      <IndexGrid my={[6, 6, 12]} flexDirection={['row', 'row', 'row-reverse']} alignItems="end">
        <Box px={5} width={[10 / 12, 8 / 12, 8 / 12, 5 / 12]} mx="auto">
          <Box position="relative" mt={[2, 3, 5]}>
            <HeroImage width="100%" height={null} />
          </Box>
        </Box>
        <Box as={Box} px={5} my={[4, 3, 0]} width={[1, 1, 1, 7 / 12]}>
          <Heading as="h1" sx={{color: 'accent.fg', fontSize: [48, 56, 84], mb: 1}}>
            Primer
          </Heading>
          <Text as="h2" sx={{fontWeight: 'normal', fontSize: [4, 5, 5, 6], mb: 3, mt: 0, lineHeight: 1.25}}>
            Design, build, and create with GitHub’s design system
          </Text>
          <Text>
            Primer was created for GitHub by GitHub. We love it so much, we chose to{' '}
            <Link href="https://github.com/primer/" target="_blank">open-source</Link> it to allow the community to design and build
            their own projects with Primer.
          </Text>
        </Box>
      </IndexGrid>
    </Box>
  )
}
