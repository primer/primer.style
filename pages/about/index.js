import React from 'react'
import {Box, Text} from '@primer/components'
import Nav from '../../src/Nav'

export default () => (
  <Box>
    <Nav />
    <Box p={4}>
      <Text fontSize={5}>About</Text>
    </Box>
  </Box>
)
