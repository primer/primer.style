import React from 'react'
import {Box, Heading, Text, Flex, Absolute, Relative} from '@primer/components'

import ReactBodymovin from 'react-bodymovin'
import TestAnimation from './TestAnimation.json'

import IndexGrid from './IndexGrid'

const bodymovinOptions = {
  loop: true,
  autoplay: true,
  prerender: true,
  animationData: TestAnimation
}

export default function Hero() {
  return (
    <Box pt={[4, 2, 0]}>
      <IndexGrid my={[6, 6, 6]} flexDirection={['row', 'row', 'row-reverse']} alignItems="end">
        <Flex.Item px={5} width={[10 / 12, 8 / 12, 8 / 12, 12 / 12]} mx={'auto'}>
          <Relative mt={[2, 3, 0]}>
            <div>
              <ReactBodymovin options={bodymovinOptions} />
            </div>
          </Relative>
        </Flex.Item>
      </IndexGrid>
    </Box>
  )
}
